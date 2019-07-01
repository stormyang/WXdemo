"use strict";

function makeMap(e) {
  for (var t = {}, r = e.split(","), s = 0; s < r.length; s++) t[r[s]] = !0;
  return t
}

function q(e) {
  return '"' + e + '"'
}

function removeDOCTYPE(e) {
  return e.replace(/<\?xml.*\?>\n/, "").replace(/<.*!doctype.*\>\n/, "").replace(/<.*!DOCTYPE.*\>\n/, "")
}

function trimHtml(e) {
  return e.replace(/\n+/g, "").replace(/<!--.*?-->/gi, "").replace(/\/\*.*?\*\//gi, "").replace(/[ ]+</gi, "<")
}

function html2json(e, t) {
  e = removeDOCTYPE(e), e = trimHtml(e), e = wxDiscode.strDiscode(e);
  var r = [],
    s = {
      node: t,
      nodes: [],
      images: [],
      imageUrls: []
    },
    a = 0;
  return HTMLParser(e, {
    start: function(e, o, i) {
      var n = {
        node: "element",
        tag: e
      };
      if (0 === r.length) n.index = a.toString(), a += 1;
      else {
        var l = r[0];
        void 0 === l.nodes && (l.nodes = []), n.index = l.index + "." + l.nodes.length
      }
      if (block[e] ? n.tagType = "block" : inline[e] ? n.tagType = "inline" : closeSelf[e] && (n.tagType = "closeSelf"), 0 !== o.length && (n.attr = o.reduce(function(e, t) {
          var r = t.name,
            s = t.value;
          return "class" == r && (console.dir(s), n.classStr = s), "style" == r && (console.dir(s), n.styleStr = s), s.match(/ /) && (s = s.split(" ")), e[r] ? Array.isArray(e[r]) ? e[r].push(s) : e[r] = [e[r], s] : e[r] = s, e
        }, {})), "img" === n.tag) {
        n.imgIndex = s.images.length;
        var c = n.attr.src;
        "" == c[0] && c.splice(0, 1), c = wxDiscode.urlToHttpUrl(c, __placeImgeUrlHttps), n.attr.src = c, n.from = t, s.images.push(n), s.imageUrls.push(c)
      }
      if ("font" === n.tag) {
        var d = ["x-small", "small", "medium", "large", "x-large", "xx-large", "-webkit-xxx-large"],
          m = {
            color: "color",
            face: "font-family",
            size: "font-size"
          };
        n.attr.style || (n.attr.style = []), n.styleStr || (n.styleStr = "");
        for (var p in m)
          if (n.attr[p]) {
            var u = "size" === p ? d[n.attr[p] - 1] : n.attr[p];
            n.attr.style.push(m[p]), n.attr.style.push(u), n.styleStr += m[p] + ": " + u + ";"
          }
      }
      if ("source" === n.tag && (s.source = n.attr.src), i) {
        var l = r[0] || s;
        void 0 === l.nodes && (l.nodes = []), l.nodes.push(n)
      } else r.unshift(n)
    },
    end: function(e) {
      var t = r.shift();
      if (t.tag !== e && console.error("invalid state: mismatch end tag"), "video" === t.tag && s.source && (t.attr.src = s.source, delete result.source), 0 === r.length) s.nodes.push(t);
      else {
        var a = r[0];
        void 0 === a.nodes && (a.nodes = []), a.nodes.push(t)
      }
    },
    chars: function(e) {
      var t = {
        node: "text",
        text: e,
        textArray: transEmojiStr(e)
      };
      if (0 === r.length) s.nodes.push(t);
      else {
        var a = r[0];
        void 0 === a.nodes && (a.nodes = []), t.index = a.index + "." + a.nodes.length, a.nodes.push(t)
      }
    },
    comment: function(e) {}
  }), s
}

function transEmojiStr(e) {
  var t = [];
  if (0 == __emojisReg.length || !__emojis) {
    var r = {};
    return r.node = "text", r.text = e, a = [r]
  }
  e = e.replace(/\[([^\[\]]+)\]/g, ":$1:");
  for (var s = new RegExp("[:]"), a = e.split(s), o = 0; o < a.length; o++) {
    var i = a[o],
      r = {};
    __emojis[i] ? (r.node = "element", r.tag = "emoji", r.text = __emojis[i], r.baseSrc = __emojisBaseSrc) : (r.node = "text", r.text = i), t.push(r)
  }
  return t
}

function emojisInit() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/wxParse/emojis/",
    r = arguments[2];
  __emojisReg = e, __emojisBaseSrc = t, __emojis = r
}
var __placeImgeUrlHttps = "https",
  __emojisReg = "",
  __emojisBaseSrc = "",
  __emojis = {},
  wxDiscode = require("./wxDiscode.js"),
  HTMLParser = require("./htmlparser.js"),
  empty = makeMap("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),
  block = makeMap("br,a,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),
  inline = makeMap("abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),
  closeSelf = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),
  fillAttrs = makeMap("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),
  special = makeMap("wxxxcode-style,script,style,view,scroll-view,block");
module.exports = {
  html2json: html2json,
  emojisInit: emojisInit
};