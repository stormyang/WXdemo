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
      function n(o, a) {
        try {
          var i = t[o](a),
            s = i.value
        } catch (e) {
          return void r(e)
        }
        if (!i.done) return Promise.resolve(s).then(function(e) {
          n("next", e)
        }, function(e) {
          n("throw", e)
        });
        e(s)
      }
      return n("next")
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
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
      }
    }
    return function(t, r, n) {
      return r && e(t.prototype, r), n && e(t, n), t
    }
  }(),
  _wepy = require("./../npm/wepy/lib/wepy.js"),
  _wepy2 = _interopRequireDefault(_wepy),
  _tab = require("./../components/tab.js"),
  _tab2 = _interopRequireDefault(_tab),
  _api = require("./../api/api.js"),
  _api2 = _interopRequireDefault(_api),
  _tip = require("./../utils/tip.js"),
  _tip2 = _interopRequireDefault(_tip),
  _bottomLoadMore = require("./../components/common/bottomLoadMore.js"),
  _bottomLoadMore2 = _interopRequireDefault(_bottomLoadMore),
  _placeholder = require("./../components/common/placeholder.js"),
  _placeholder2 = _interopRequireDefault(_placeholder),
  _constant = require("./../utils/constant.js"),
  _shop_grid_list = require("./../components/shop_grid_list.js"),
  _shop_grid_list2 = _interopRequireDefault(_shop_grid_list),
  replenishmentGoods = function(e) {
    function t() {
      var e, r, n, o;
      _classCallCheck(this, t);
      for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) i[s] = arguments[s];
      return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), n.config = {
        navigationBarTitleText: "我要补货"
      }, n.$repeat = {}, n.$props = {
        tab: {
          "xmlns:v-on": "",
          "xmlns:v-bind": "",
          "v-bind:currentTab.sync": "currentTab",
          "v-bind:tabList.sync": "tabList"
        },
        shopGridList: {
          "xmlns:v-bind": "",
          "v-bind:purchasetype.sync": "purchasetype",
          "v-bind:list.sync": "list"
        },
        bottomLoadMore: {
          "v-bind:show.sync": "showLoading",
          message: "正在加载"
        },
        placeholder: {
          "v-bind:show.sync": "is_empty",
          message: "暂无待补货数据"
        }
      }, n.$events = {
        tab: {
          "v-on:currentTab": "getCurrentTab"
        }
      }, n.components = {
        tab: _tab2.default,
        shopGridList: _shop_grid_list2.default,
        bottomLoadMore: _bottomLoadMore2.default,
        placeholder: _placeholder2.default
      }, n.data = {
        purchasetype: 2,
        currentTab: 0,
        winHeight: 0,
        tabList: ["快速补货", "申请记录", "待补货"],
        list: [],
        is_empty: !1,
        currentPage: 1,
        page_total: 0,
        showLoading: !0,
        preventRepeatReuqest: !1
      }, n.computed = {}, n.methods = {
        getCurrentTab: function(e, t) {
          var r = this;
          r.currentTab = e, r.$apply()
        },
        bindChange: function(e) {
          var t = this;
          t.currentTab = e.detail.current, this.list = [], this.currentPage = 1, this.page_total = 0, this.is_empty = !1, this.getMyOrderGoodsList(), t.$apply()
        }
      }, n.events = {}, o = r, _possibleConstructorReturn(n, o)
    }
    return _inherits(t, e), _createClass(t, [{
      key: "getMyOrderGoodsList",
      value: function() {
        function e(e, r) {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
          var n, o, a;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return n = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, o = n.openid, e.next = 4, _api2.default.goodsUserOrderList({
                  query: {
                    page: t || 1,
                    size: r || 4,
                    openId: o,
                    type: "finish",
                    doType: this.currentTab
                  }
                });
              case 4:
                a = e.sent, 0 == a.data.code ? (this.list = [].concat(_toConsumableArray(this.list), _toConsumableArray(a.data.list)), this.page_total = a.data.page_total, 0 == a.data.page_total && (this.is_empty = !0)) : _tip2.default.error(a.data.msg), this.showLoading = !1, this.$apply();
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
          t = wx.getStorageSync(_constant.SYSTEM_INFO);
        e.winHeight = t.windowHeight, this.list = [], this.is_empty = !1, this.getMyOrderGoodsList(), wx.hideShareMenu()
      }
    }, {
      key: "onReachBottom",
      value: function() {
        console.log("加载更多");
        var e = this;
        if (e.showLoading = !0, console.log(e.page_total + "232===" + e.currentPage), e.page_total > e.currentPage) {
          if (e.preventRepeatReuqest) return !0;
          e.preventRepeatReuqest = !0, e.currentPage++, console.log(this.currentTab), this.getMyOrderGoodsList(this.currentPage), e.preventRepeatReuqest = !1
        } else e.showLoading = !1
      }
    }]), t
  }(_wepy2.default.page);
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(replenishmentGoods, "pages/replenishment_goods"));