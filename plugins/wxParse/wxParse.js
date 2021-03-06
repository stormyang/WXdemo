"use strict";

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}

function _defineProperty(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}

function wxParse() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wxParseData",
    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "html",
    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '<div class="color:red;">数据不能为空</div>',
    i = arguments[3],
    r = arguments[4],
    n = i,
    o = {};
  if ("html" == t) o = _html2json2.default.html2json(a, e), console.log(JSON.stringify(o, " ", " "));
  else if ("md" == t || "markdown" == t) {
    var d = new _showdown2.default.Converter,
      s = d.makeHtml(a);
    o = _html2json2.default.html2json(s, e), console.log(JSON.stringify(o, " ", " "))
  }
  o.view = {}, o.view.imagePadding = 0, void 0 !== r && (o.view.imagePadding = r);
  var l = {};
  l[e] = o, n.setData(l), n.bindData = l, n.wxParseImgLoad = wxParseImgLoad, n.wxParseImgTap = wxParseImgTap
}

function wxParseImgTap(e) {
  var t = this,
    a = e.target.dataset.src,
    i = e.target.dataset.from;
  void 0 !== i && i.length > 0 && wx.previewImage({
    current: a,
    urls: t.data[i].imageUrls
  })
}

function wxParseImgLoad(e) {
  var t = this,
    a = e.target.dataset.from,
    i = e.target.dataset.idx;
  void 0 !== a && a.length > 0 && calMoreImageInfo(e, i, t, a)
}

function calMoreImageInfo(e, t, a, i) {
  var r, n = a.data[i];
  if (n && 0 != n.images.length) {
    var o = n.images,
      d = wxAutoImageCal(e.detail.width, e.detail.height, a, i),
      s = o[t].index,
      l = "" + i,
      g = !0,
      m = !1,
      h = void 0;
    try {
      for (var w, u = s.split(".")[Symbol.iterator](); !(g = (w = u.next()).done); g = !0) {
        l += ".nodes[" + w.value + "]"
      }
    } catch (e) {
      m = !0, h = e
    } finally {
      try {
        !g && u.return && u.return()
      } finally {
        if (m) throw h
      }
    }
    var f = l + ".width",
      v = l + ".height";
    a.setData((r = {}, _defineProperty(r, f, d.imageWidth), _defineProperty(r, v, d.imageheight), r))
  }
}

function wxAutoImageCal(e, t, a, i) {
  var r = 0,
    n = 0,
    o = 0,
    d = {},
    s = a.data[i].view.imagePadding;
  return r = realWindowWidth - 2 * s, realWindowHeight, e > r ? (n = r, o = n * t / e, d.imageWidth = n, d.imageheight = o) : (d.imageWidth = e, d.imageheight = t), d
}

function wxParseTemArray(e, t, a, i) {
  for (var r = [], n = i.data, o = null, d = 0; d < a; d++) {
    var s = n[t + d].nodes;
    r.push(s)
  }
  e = e || "wxParseTemArray", o = JSON.parse('{"' + e + '":""}'), o[e] = r, i.setData(o)
}

function emojisInit() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/wxParse/emojis/",
    a = arguments[2];
  _html2json2.default.emojisInit(e, t, a)
}
var _showdown = require("./showdown.js"),
  _showdown2 = _interopRequireDefault(_showdown),
  _html2json = require("./html2json.js"),
  _html2json2 = _interopRequireDefault(_html2json),
  realWindowWidth = 0,
  realWindowHeight = 0;
wx.getSystemInfo({
  success: function(e) {
    realWindowWidth = e.windowWidth, realWindowHeight = e.windowHeight
  }
}), module.exports = {
  wxParse: wxParse,
  wxParseTemArray: wxParseTemArray,
  emojisInit: emojisInit
};