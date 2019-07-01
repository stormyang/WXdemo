"use strict";

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}

function _asyncToGenerator(e) {
  return function() {
    var t = e.apply(this, arguments);
    return new Promise(function(e, n) {
      function r(o, i) {
        try {
          var a = t[o](i),
            u = a.value
        } catch (e) {
          return void n(e)
        }
        if (!a.done) return Promise.resolve(u).then(function(e) {
          r("next", e)
        }, function(e) {
          r("throw", e)
        });
        e(u)
      }
      return r("next")
    })
  }
}

function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _possibleConstructorReturn(e, t) {
  if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return !t || "object" != typeof t && "function" != typeof t ? e : t
}

function _inherits(e, t) {
  if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
Object.defineProperty(exports, "__esModule", {
  value: !0
});
var _createClass = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }
    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t
    }
  }(),
  _wepy = require("./../npm/wepy/lib/wepy.js"),
  _wepy2 = _interopRequireDefault(_wepy),
  _api = require("./../api/api.js"),
  _api2 = _interopRequireDefault(_api),
  _tip = require("./../utils/tip.js"),
  _tip2 = _interopRequireDefault(_tip),
  _constant = require("./../utils/constant.js"),
  Messages = function(e) {
    function t() {
      var e, n, r, o;
      _classCallCheck(this, t);
      for (var i = arguments.length, a = Array(i), u = 0; u < i; u++) a[u] = arguments[u];
      return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a))), r.config = {
        navigationBarTitleText: "设置"
      }, r.components = {}, r.data = {
        userInfo: {},
        winHeight: 0
      }, r.computed = {}, r.methods = {}, r.events = {}, o = n, _possibleConstructorReturn(r, o)
    }
    return _inherits(t, e), _createClass(t, [{
      key: "getUserInfo",
      value: function() {
        function e(e, n) {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, n) {
          var r, o, i, a;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = this, o = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, i = o.openid, e.next = 5, _api2.default.getUserInfo({
                  query: {
                    openId: i
                  }
                });
              case 5:
                a = e.sent, 0 == a.data.code ? (this.userInfo = a.data.user, console.log("==================="), console.log(r.userInfo), r.$apply()) : _tip2.default.error(a.data.msg), r.showLoading = !1;
              case 8:
              case "end":
                return e.stop()
            }
          }, e, this)
        }));
        return e
      }()
    }, {
      key: "onLoad",
      value: function() {
        var e = this,
          t = _wepy2.default.getStorageSync(_constant.SYSTEM_INFO);
        e.winHeight = t.windowHeight, this.getUserInfo(), wx.hideShareMenu()
      }
    }]), t
  }(_wepy2.default.page);
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Messages, "pages/setting"));