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
          var s = t[n](a),
            i = s.value
        } catch (e) {
          return void r(e)
        }
        if (!s.done) return Promise.resolve(i).then(function(e) {
          o("next", e)
        }, function(e) {
          o("throw", e)
        });
        e(i)
      }
      return o("next")
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
  _tab = require("./../components/tab.js"),
  _tab2 = _interopRequireDefault(_tab),
  _constant = require("./../utils/constant.js"),
  _order_item = require("./../components/order_item.js"),
  _order_item2 = _interopRequireDefault(_order_item),
  _bottomLoadMore = require("./../components/common/bottomLoadMore.js"),
  _bottomLoadMore2 = _interopRequireDefault(_bottomLoadMore),
  _placeholder = require("./../components/common/placeholder.js"),
  _placeholder2 = _interopRequireDefault(_placeholder),
  _api = require("./../api/api.js"),
  _api2 = _interopRequireDefault(_api),
  Order = function(e) {
    function t() {
      var e, r, o, n;
      _classCallCheck(this, t);
      for (var a = arguments.length, s = Array(a), i = 0; i < a; i++) s[i] = arguments[i];
      return r = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), o.config = {
        navigationBarTitleText: "我的订单"
      }, o.$repeat = {}, o.$props = {
        tab: {
          "xmlns:v-on": "",
          "xmlns:v-bind": "",
          "v-bind:tabList.sync": "tabList",
          "v-bind:currentTab.sync": "currentTab"
        },
        orderItem: {
          "xmlns:v-bind": "",
          "v-bind:orderList.sync": "orderList"
        },
        bottomLoadMore: {
          "v-bind:show.sync": "showLoading",
          message: "正在加载"
        },
        placeholder: {
          "v-bind:show.sync": "is_empty",
          message: "暂无发现数据"
        }
      }, o.$events = {
        tab: {
          "v-on:currentTab": "getCurrentTab"
        }
      }, o.components = {
        tab: _tab2.default,
        orderItem: _order_item2.default,
        bottomLoadMore: _bottomLoadMore2.default,
        placeholder: _placeholder2.default
      }, o.data = {
        winHeight: 0,
        totalCount: 0,
        tabList: ["全部订单", "待支付", "待收货", "已完成"],
        orderList: [],
        currentPage: 1,
        is_empty: !1,
        orderStatus: "",
        currentTab: 0,
        flag: 0,
        showLoading: !0,
        preventRepeatReuqest: !1,
        pendingPayCount: 0,
        backrdersCount: 0,
        shippedCount: 0,
        receiveFlg: 0
      }, o.computed = {}, o.methods = {
        getCurrentTab: function(e, t) {
          this.currentPage = 1, this.page_total = 0, this.orderList = [];
          var r = this;
          r.currentTab = e, console.log("cur"), console.log(e), 0 == e ? (console.log("所有订单类型"), r.orderStatus = "", r.getMyOrder()) : 1 == e ? (console.log("未付款订单类型"), r.orderStatus = 0, r.getMyOrder()) : 2 == e ? (console.log("待收货订单类型"), r.orderStatus = 2, r.receiveFlg = 2, r.getMyOrder()) : 3 == e && (console.log("已完成订单类型"), r.orderStatus = 4, r.receiveFlg = 4, r.getMyOrder()), r.$apply()
        },
        bindChange: function(e) {
          var t = this;
          t.currentTab = e.detail.current, console.log("change tab...." + e.detailcurrent), t.$apply()
        }
      }, o.events = {
        refreshOrderList: function(e) {
          console.log("msg值:" + e), 3 == e && (this.currentTab = 3, this.$apply(), this.orderStatus = 4), this.getMyOrder(1, 10, 1)
        }
      }, o.watch = {
        currentTab: function(e) {
          console.log("====" + e)
        }
      }, n = r, _possibleConstructorReturn(o, n)
    }
    return _inherits(t, e), _createClass(t, [{
      key: "getMyOrder",
      value: function() {
        function e(e, r, o) {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r, o) {
          var n, a, s, i;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("refresh值：" + o), n = this, console.log("orderStatus值"), console.log("orderStatus值" + n.orderStatus), a = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, s = a.openid, e.next = 8, _api2.default.getMyOrderList({
                  query: {
                    openId: s,
                    orderStatus: n.orderStatus,
                    receiveFlg: n.receiveFlg,
                    page: t || 1,
                    size: r || 10,
                    type: 1
                  }
                });
              case 8:
                i = e.sent, 0 == i.data.code ? (console.log("json.data.list"), console.log(i.data.list), n.orderList = o ? i.data.list : [].concat(_toConsumableArray(n.orderList), _toConsumableArray(i.data.list)), n.page_total = i.data.page_total, n.totalCount = i.data.totalCount, console.log("条目数：" + n.totalCount), 0 == i.data.page_total ? n.is_empty = !0 : n.is_empty = !1, n.getMyOrderSize(), console.log("list返回数据"), console.log(n.orderList)) : tip.error(i.data.msg), n.showLoading = !1, n.$apply();
              case 12:
              case "end":
                return e.stop()
            }
          }, e, this)
        }));
        return e
      }()
    }, {
      key: "getMyOrderSize",
      value: function() {
        function e() {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
          var t, r, o, n, a;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("订单数量统计"), t = this, r = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, o = r.openid, e.next = 6, _api2.default.getMyOrderSize({
                  query: {
                    openId: o
                  }
                });
              case 6:
                n = e.sent, 0 == n.data.code && (t.pendingPayCount = n.data.pendingPayCount, t.backrdersCount = n.data.backrdersCount, t.shippedCount = n.data.shippedCount, a = ["全部订单", {
                  name: "待支付",
                  dotNum: t.pendingPayCount
                }, {
                  name: "待收货",
                  dotNum: t.backrdersCount
                }, "已完成"], this.$invoke("tab", "changeList", a), t.$apply());
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
      value: function(e) {
        var t = this;
        t.orderList = [], t.currentTab = e.type, t.getMyOrder();
        var r = _wepy2.default.getStorageSync(_constant.SYSTEM_INFO);
        t.winHeight = r.windowHeight, t.$apply(), wx.hideShareMenu()
      }
    }, {
      key: "onShow",
      value: function() {
        this.getMyOrder(1, 10, 1)
      }
    }, {
      key: "onReachBottom",
      value: function() {
        console.log("加载更多");
        var e = this;
        if (e.showLoading = !0, console.log(e.page_total + "232===" + e.currentPage), e.page_total > e.currentPage) {
          if (e.preventRepeatReuqest) return !0;
          e.preventRepeatReuqest = !0, e.currentPage++, console.log(this.currentTab), 0 == this.currentTab ? (console.log("所有订单类型"), e.getMyOrder(e.currentPage)) : 1 == this.currentTab ? (console.log("未付款订单类型"), e.orderStatus = 0, e.getMyOrder(e.currentPage)) : 2 == this.currentTab ? (console.log("待发货订单类型"), e.orderStatus = 2, e.receiveFlg = 2, e.getMyOrder(e.currentPage)) : 3 == this.currentTab && (console.log("已完成订单类型"), e.orderStatus = 4, e.getMyOrder(e.currentPage)), e.preventRepeatReuqest = !1
        } else e.showLoading = !1
      }
    }]), t
  }(_wepy2.default.page);
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Order, "pages/order"));