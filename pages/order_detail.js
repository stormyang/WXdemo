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
  _tip = require("./../utils/tip.js"),
  _tip2 = _interopRequireDefault(_tip),
  _shop_item_list = require("./../components/shop_item_list.js"),
  _shop_item_list2 = _interopRequireDefault(_shop_item_list),
  _api = require("./../api/api.js"),
  _api2 = _interopRequireDefault(_api),
  _constant = require("./../utils/constant.js"),
  OrderDetail = function(e) {
    function t() {
      var e, r, n, o;
      _classCallCheck(this, t);
      for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) i[s] = arguments[s];
      return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), n.config = {
        navigationBarTitleText: "订单详情"
      }, n.data = {
        obj: {},
        orderNo: "",
        flag: "",
        list: [],
        orderExpress: {},
        expressFlowInfo: {},
        isrollHeight: 400
      }, n.$repeat = {}, n.$props = {
        shopItemList: {
          "xmlns:v-bind": "",
          "v-bind:goodsList.sync": "list"
        }
      }, n.$events = {}, n.components = {
        shopItemList: _shop_item_list2.default
      }, n.computed = {}, n.methods = {
        delOrder: function(e) {
          var t = this;
          return _asyncToGenerator(regeneratorRuntime.mark(function r() {
            return regeneratorRuntime.wrap(function(r) {
              for (;;) switch (r.prev = r.next) {
                case 0:
                  return t.flag = 2, t.orderNo = e.currentTarget.dataset.id, r.next = 4, _tip2.default.confirm("是否删除订单");
                case 4:
                  console.log(t.flag), t.editOrderInfo(t.orderNo, t.flag), console.log("删除成功");
                case 7:
                case "end":
                  return r.stop()
              }
            }, r, t)
          }))()
        },
        completion: function(e) {
          var t = this;
          return _asyncToGenerator(regeneratorRuntime.mark(function r() {
            return regeneratorRuntime.wrap(function(r) {
              for (;;) switch (r.prev = r.next) {
                case 0:
                  return t.flag = 3, t.orderNo = e.currentTarget.dataset.id, r.next = 4, _tip2.default.confirm("是否确认收货");
                case 4:
                  t.editOrderInfo(t.orderNo, t.flag), console.log("完成");
                case 6:
                case "end":
                  return r.stop()
              }
            }, r, t)
          }))()
        },
        goLogistics: function() {
          var e = this;
          return _asyncToGenerator(regeneratorRuntime.mark(function t() {
            return regeneratorRuntime.wrap(function(e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  _tip2.default.confirm("查看物流");
                case 1:
                case "end":
                  return e.stop()
              }
            }, t, e)
          }))()
        },
        payMoney: function(e) {
          var t = this;
          return _asyncToGenerator(regeneratorRuntime.mark(function r() {
            var n, o, a, i;
            return regeneratorRuntime.wrap(function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return n = e.currentTarget.dataset.tradeno, o = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, a = o.openid, t.next = 5, _api2.default.toPay({
                    query: {
                      openId: a,
                      orderNo: n
                    }
                  });
                case 5:
                  i = t.sent, 0 == i.data.code ? wx.requestPayment({
                    appId: i.data.appId,
                    timeStamp: i.data.timeStamp,
                    nonceStr: i.data.nonceStr,
                    package: i.data.package,
                    signType: "MD5",
                    paySign: i.data.paySign,
                    success: function(e) {
                      console.log("pay", e), setTimeout(function() {
                        _tip2.default.loaded(), _wepy2.default.navigateTo({
                          url: "/pages/pay_success?orderNo=" + n
                        })
                      }, 2e3)
                    },
                    fail: function(e) {
                      _tip2.default.alert("支付失败")
                    }
                  }) : _tip2.default.alert("支付失败");
                case 7:
                case "end":
                  return t.stop()
              }
            }, r, t)
          }))()
        }
      }, n.events = {}, o = r, _possibleConstructorReturn(n, o)
    }
    return _inherits(t, e), _createClass(t, [{
      key: "getOrderInfo",
      value: function() {
        function e(e, r) {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
          var n, o, a;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return n = this, o = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, e.next = 4, _api2.default.getOrderInfo({
                  query: {
                    orderNo: this.orderNo
                  }
                });
              case 4:
                a = e.sent, 0 == a.data.code ? (this.obj = a.data.obj, n.list = [], n.list = [].concat(_toConsumableArray(n.list), _toConsumableArray(a.data.obj.orderItemList)), n.$invoke("shopItemList", "refreshList", n.list), console.log("========list返回数据========"), console.log(n.list), console.log(a.data.obj.orderItemList)) : _tip2.default.error(a.data.msg), n.$apply();
              case 7:
              case "end":
                return e.stop()
            }
          }, e, this)
        }));
        return e
      }()
    }, {
      key: "editOrderInfo",
      value: function() {
        function e(e, r) {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
          var n, o, a;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return n = this, o = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, e.next = 4, _api2.default.editOrderInfo({
                  query: {
                    orderNo: t,
                    flag: r
                  }
                });
              case 4:
                a = e.sent, 0 == a.data.code ? (console.log("===========lzz返回数据========="), console.log(a.data.errerTips), this.onShow(), this.flag) : _tip2.default.error(a.data.msg), n.$apply();
              case 7:
              case "end":
                return e.stop()
            }
          }, e, this)
        }));
        return e
      }()
    }, {
      key: "getOrderExpressInfo",
      value: function() {
        function e() {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
          var t, r, n;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("orderNo"), t = this, r = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, e.next = 5, _api2.default.orderExpressInfo({
                  query: {
                    orderNo: this.orderNo
                  }
                });
              case 5:
                n = e.sent, 0 == n.data.code ? (t.orderExpress = n.data.orderExpress, t.expressFlowInfo = n.data.expressFlowInfo, console.log("========list返回数据========"), console.log(t.list)) : _tip2.default.error(n.data.msg), t.$apply();
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
        this.orderNo = e.orderNo, t.getOrderInfo(), t.getOrderExpressInfo(), console.log("=========options=========="), console.log(e.id)
      }
    }, {
      key: "onShow",
      value: function() {
        var e = this,
          t = _wepy2.default.getStorageSync(_constant.SYSTEM_INFO);
        e.isrollHeight = t.windowHeight, e.getOrderInfo(), e.getOrderExpressInfo(), e.$apply(), wx.hideShareMenu()
      }
    }]), t
  }(_wepy2.default.page);
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(OrderDetail, "pages/order_detail"));