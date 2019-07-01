"use strict";

function _interopRequireDefault(t) {
  return t && t.__esModule ? t : {
    default: t
  }
}

function _asyncToGenerator(t) {
  return function() {
    var e = t.apply(this, arguments);
    return new Promise(function(t, r) {
      function n(o, a) {
        try {
          var i = e[o](a),
            s = i.value
        } catch (t) {
          return void r(t)
        }
        if (!i.done) return Promise.resolve(s).then(function(t) {
          n("next", t)
        }, function(t) {
          n("throw", t)
        });
        t(s)
      }
      return n("next")
    })
  }
}

function _classCallCheck(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function _possibleConstructorReturn(t, e) {
  if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return !e || "object" != typeof e && "function" != typeof e ? t : e
}

function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
Object.defineProperty(exports, "__esModule", {
  value: !0
});
var _createClass = function() {
    function t(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
      }
    }
    return function(e, r, n) {
      return r && t(e.prototype, r), n && t(e, n), e
    }
  }(),
  _wepy = require("./../npm/wepy/lib/wepy.js"),
  _wepy2 = _interopRequireDefault(_wepy),
  _api = require("./../api/api.js"),
  _api2 = _interopRequireDefault(_api),
  _constant = require("./../utils/constant.js"),
  _tip = require("./../utils/tip.js"),
  _tip2 = _interopRequireDefault(_tip),
  Classify = function(t) {
    function e() {
      var t, r, n, o;
      _classCallCheck(this, e);
      for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) i[s] = arguments[s];
      return r = n = _possibleConstructorReturn(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(i))), n.config = {
        navigationBarTitleText: "商品分类"
      }, n.components = {}, n.data = {
        img_domain: _constant.IMG_DOMAIN,
        scrollTop: 100,
        windowHeight: 0,
        list: {},
        rootcateList: {},
        childcateList: {}
      }, n.computed = {}, n.methods = {
        changeCate: function(t) {
          console.log("changecate....");
          var e = t.currentTarget.dataset.code;
          this.getChildCate(e), _wepy2.default.setStorageSync(_constant.SEL_CLASS_CODE, e);
          for (var r = 0; r < this.rootcateList.length; r++) {
            var n = this.rootcateList[r];
            n.active = !1, n.code == e && (n.active = !0)
          }
        },
        onShareAppMessage: function(t) {
          return "button" === t.from && console.log(t.target), {
            title: this.detail.name,
            path: "/pages/classify",
            success: function(t) {},
            fail: function(t) {}
          }
        }
      }, n.events = {}, o = r, _possibleConstructorReturn(n, o)
    }
    return _inherits(e, t), _createClass(e, [{
      key: "getChildCate",
      value: function() {
        function t(t) {
          return e.apply(this, arguments)
        }
        var e = _asyncToGenerator(regeneratorRuntime.mark(function t(e) {
          var r;
          return regeneratorRuntime.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, _api2.default.childGoodsCatetoryList({
                  query: {
                    rootCategoryCode: e
                  }
                });
              case 2:
                r = t.sent, 0 == r.data.code ? this.childcateList = r.data.list : _tip2.default.error(r.data.msg), this.$apply();
              case 5:
              case "end":
                return t.stop()
            }
          }, t, this)
        }));
        return t
      }()
    }, {
      key: "getRootCateTopLevel",
      value: function() {
        function t() {
          return e.apply(this, arguments)
        }
        var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
          var e, r, n, o;
          return regeneratorRuntime.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, _api2.default.rootCtegoryList({
                  query: {}
                });
              case 2:
                if (e = t.sent, 0 == e.data.code) {
                  if (this.rootcateList = e.data.list, this.rootcateList.length > 0) {
                    if (r = wx.getStorageSync(_constant.SEL_CLASS_CODE), n = this.rootcateList[0].code, 0 == r.length) this.rootcateList[0].active = !0;
                    else
                      for (o = 0; o < this.rootcateList.length; o++) r == this.rootcateList[o].code && (n = this.rootcateList[o].code, this.rootcateList[o].active = !0);
                    this.getChildCate(n)
                  }
                } else _tip2.default.error(e.data.msg);
                this.$apply();
              case 5:
              case "end":
                return t.stop()
            }
          }, t, this)
        }));
        return t
      }()
    }, {
      key: "onLoad",
      value: function() {
        var t = wx.getStorageSync(_constant.SYSTEM_INFO);
        this.windowHeight = t.windowHeight, this.$apply(), wx.hideShareMenu()
      }
    }, {
      key: "onShow",
      value: function() {
        this.getRootCateTopLevel()
      }
    }]), e
  }(_wepy2.default.page);
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Classify, "pages/classify"));