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
      function r(i, o) {
        try {
          var a = t[i](o),
            s = a.value
        } catch (e) {
          return void n(e)
        }
        if (!a.done) return Promise.resolve(s).then(function(e) {
          r("next", e)
        }, function(e) {
          r("throw", e)
        });
        e(s)
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
  _constant = require("./../utils/constant.js"),
  _points_detail = require("./../components/points_detail.js"),
  _points_detail2 = _interopRequireDefault(_points_detail),
  Points = function(e) {
    function t() {
      var e, n, r, i;
      _classCallCheck(this, t);
      for (var o = arguments.length, a = Array(o), s = 0; s < o; s++) a[s] = arguments[s];
      return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a))), r.config = {
        navigationBarTitleText: "我的积分"
      }, r.$repeat = {}, r.$props = {
        pointsDetail: {
          "xmlns:v-bind": "",
          "v-bind:is_empty.sync": "is_empty",
          "v-bind:list.sync": "list"
        }
      }, r.$events = {}, r.components = {
        pointsDetail: _points_detail2.default
      }, r.data = {
        winHeight: 0,
        list: [],
        is_empty: !1,
        avatarUrl: "",
        nickName: "",
        userPoint: 0
      }, r.events = {}, r.computed = {}, r.methods = {
        more: function() {
          _wepy2.default.navigateTo({
            url: "/pages/points_more"
          })
        },
        jfRule: function() {
          _wepy2.default.navigateTo({
            url: "/pages/points_rule"
          })
        }
      }, r.events = {}, i = n, _possibleConstructorReturn(r, i)
    }
    return _inherits(t, e), _createClass(t, [{
      key: "getUserPoint",
      value: function() {
        function e() {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
          var t, n, r, i;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = this, n = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, r = n.openid, e.next = 5, _api2.default.pointInfo({
                  query: {
                    openId: r,
                    page: "1",
                    size: "10"
                  }
                });
              case 5:
                i = e.sent, 0 == i.data.code ? (t.list = i.data.list, this.userPoint = i.data.userPoint, t.$apply()) : tip.error(i.data.msg), t.showLoading = !1;
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
          t = _wepy2.default.getStorageSync(_constant.SYSTEM_INFO),
          n = _wepy2.default.getStorageSync(_constant.USER_INFO);
        e.avatarUrl = n.avatarUrl, e.nickName = n.nickName, e.winHeight = t.windowHeight, console.log("winHeight===", e.winHeight), e.getUserPoint(), e.$apply(), wx.hideShareMenu()
      }
    }]), t
  }(_wepy2.default.page);
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Points, "pages/points"));