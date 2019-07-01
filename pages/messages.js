"use strict";

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}

function _asyncToGenerator(e) {
  return function() {
    var t = e.apply(this, arguments);
    return new Promise(function(e, o) {
      function r(n, a) {
        try {
          var s = t[n](a),
            i = s.value
        } catch (e) {
          return void o(e)
        }
        if (!s.done) return Promise.resolve(i).then(function(e) {
          r("next", e)
        }, function(e) {
          r("throw", e)
        });
        e(i)
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
      for (var o = 0; o < t.length; o++) {
        var r = t[o];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }
    return function(t, o, r) {
      return o && e(t.prototype, o), r && e(t, r), t
    }
  }(),
  _wepy = require("./../npm/wepy/lib/wepy.js"),
  _wepy2 = _interopRequireDefault(_wepy),
  _api = require("./../api/api.js"),
  _api2 = _interopRequireDefault(_api),
  _tip = require("./../utils/tip.js"),
  _tip2 = _interopRequireDefault(_tip),
  _bottomLoadMore = require("./../components/common/bottomLoadMore.js"),
  _bottomLoadMore2 = _interopRequireDefault(_bottomLoadMore),
  _placeholder = require("./../components/common/placeholder.js"),
  _placeholder2 = _interopRequireDefault(_placeholder),
  _constant = require("./../utils/constant.js"),
  Messages = function(e) {
    function t() {
      var e, o, r, n;
      _classCallCheck(this, t);
      for (var a = arguments.length, s = Array(a), i = 0; i < a; i++) s[i] = arguments[i];
      return o = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), r.config = {
        navigationBarTitleText: "我的消息"
      }, r.$repeat = {}, r.$props = {
        bottomLoadMore: {
          "xmlns:v-bind": "",
          "v-bind:show.sync": "showLoading",
          message: "正在加载"
        },
        placeholder: {
          "v-bind:show.sync": "is_empty",
          message: "暂无消息"
        }
      }, r.$events = {}, r.components = {
        bottomLoadMore: _bottomLoadMore2.default,
        placeholder: _placeholder2.default
      }, r.data = {
        dataList: [],
        winHeight: 0,
        currentPage: 1,
        page_total: 0,
        showLoading: !0,
        preventRepeatReuqest: !1,
        is_empty: !1
      }, r.computed = {}, r.methods = {}, r.events = {}, n = o, _possibleConstructorReturn(r, n)
    }
    return _inherits(t, e), _createClass(t, [{
      key: "getUserMessage",
      value: function() {
        function e(e, o) {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, o) {
          var r, n, a, s;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = this, n = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, a = n.openid, e.next = 5, _api2.default.messageInfo({
                  query: {
                    openId: a,
                    page: t || 1,
                    size: o || 10
                  }
                });
              case 5:
                s = e.sent, 0 == s.data.code ? (r.dataList = s.data.list, r.page_total = s.data.page_total, 0 == s.data.page_total && (r.is_empty = !0)) : _tip2.default.error(s.data.msg), r.showLoading = !1, r.$apply();
              case 9:
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
        e.winHeight = t.windowHeight, e.getUserMessage(), wx.hideShareMenu()
      }
    }, {
      key: "onReachBottom",
      value: function() {
        console.log("ddddddddddddddd");
        var e = this;
        if (e.showLoading = !0, console.log(e.page_total + "===" + e.currentPage), e.page_total > e.currentPage) {
          if (console.log(" //判断总页数是否大于翻页数"), e.preventRepeatReuqest) return !0;
          e.preventRepeatReuqest = !0, e.currentPage++, e.getUserMessage(e.currentPage), e.preventRepeatReuqest = !1
        } else e.showLoading = !1
      }
    }]), t
  }(_wepy2.default.page);
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Messages, "pages/messages"));