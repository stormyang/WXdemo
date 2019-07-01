"use strict";

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}

function _toConsumableArray(e) {
  if (Array.isArray(e)) {
    for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
    return r
  }
  return Array.from(e)
}

function _asyncToGenerator(e) {
  return function() {
    var t = e.apply(this, arguments);
    return new Promise(function(e, r) {
      function o(n, a) {
        try {
          var i = t[n](a),
            s = i.value
        } catch (e) {
          return void r(e)
        }
        if (!i.done) return Promise.resolve(s).then(function(e) {
          o("next", e)
        }, function(e) {
          o("throw", e)
        });
        e(s)
      }
      return o("next")
    })
  }
}

function _defineProperty(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e
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
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
      }
    }
    return function(t, r, o) {
      return r && e(t.prototype, r), o && e(t, o), t
    }
  }(),
  _wepy = require("./../npm/wepy/lib/wepy.js"),
  _wepy2 = _interopRequireDefault(_wepy),
  _api = require("./../api/api.js"),
  _api2 = _interopRequireDefault(_api),
  _constant = require("./../utils/constant.js"),
  _points_detail = require("./../components/points_detail.js"),
  _points_detail2 = _interopRequireDefault(_points_detail),
  _bottomLoadMore = require("./../components/common/bottomLoadMore.js"),
  _bottomLoadMore2 = _interopRequireDefault(_bottomLoadMore),
  _placeholder = require("./../components/common/placeholder.js"),
  _placeholder2 = _interopRequireDefault(_placeholder),
  PointsMore = function(e) {
    function t() {
      var e, r, o, n, a;
      _classCallCheck(this, t);
      for (var i = arguments.length, s = Array(i), u = 0; u < i; u++) s[u] = arguments[u];
      return o = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), n.config = {
        navigationBarTitleText: "查看更多"
      }, n.$repeat = {}, n.$props = {
        pointsDetail: {
          "xmlns:v-bind": "",
          "v-bind:is_empty.sync": "is_empty",
          "v-bind:list.sync": "list"
        },
        bottomLoadMore: {
          "v-bind:show.sync": "showLoading",
          message: "正在加载"
        },
        placeholder: {
          "v-bind:show.sync": "is_empty",
          message: "暂无发现数据"
        }
      }, n.$events = {}, n.components = {
        pointsDetail: _points_detail2.default,
        bottomLoadMore: _bottomLoadMore2.default,
        placeholder: _placeholder2.default
      }, n.data = (r = {
        winHeight: 0,
        list: [],
        is_empty: !1,
        showLoading: !1,
        currentPage: 1,
        page_total: 0
      }, _defineProperty(r, "showLoading", !0), _defineProperty(r, "preventRepeatReuqest", !1), r), n.computed = {}, n.methods = {}, n.events = {}, a = o, _possibleConstructorReturn(n, a)
    }
    return _inherits(t, e), _createClass(t, [{
      key: "getUserPoint",
      value: function() {
        function e(e, r) {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
          var o, n, a, i;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return o = this, n = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, a = n.openid, e.next = 5, _api2.default.pointInfo({
                  query: {
                    openId: a,
                    page: t || 1,
                    size: r || 10
                  }
                });
              case 5:
                i = e.sent, 0 == i.data.code ? (o.list = [].concat(_toConsumableArray(o.list), _toConsumableArray(i.data.list)), o.page_total = i.data.page_total, o.$apply()) : tip.error(i.data.msg), o.showLoading = !1;
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
        var e = this;
        e.list = [];
        var t = _wepy2.default.getStorageSync(_constant.SYSTEM_INFO);
        e.winHeight = t.windowHeight, e.getUserPoint(), e.$apply(), wx.hideShareMenu()
      }
    }, {
      key: "onReachBottom",
      value: function() {
        console.log("ddddddddddddddd");
        var e = this;
        if (e.showLoading = !0, console.log(e.page_total + "===" + e.currentPage), e.page_total > e.currentPage) {
          if (console.log(" //判断总页数是否大于翻页数"), e.preventRepeatReuqest) return !0;
          e.preventRepeatReuqest = !0, e.currentPage++, e.getUserPoint(e.currentPage), e.preventRepeatReuqest = !1
        } else e.showLoading = !1
      }
    }]), t
  }(_wepy2.default.page);
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(PointsMore, "pages/points_more"));