"use strict";

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  }
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
}), exports.default = void 0;
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
  _shop_item_list = require("./shop_item_list.js"),
  _shop_item_list2 = _interopRequireDefault(_shop_item_list),
  _api = require("./../api/api.js"),
  _api2 = _interopRequireDefault(_api),
  _constant = require("./../utils/constant.js"),
  orderItem = function(e) {
    function t() {
      var e, r, n, o;
      _classCallCheck(this, t);
      for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) i[s] = arguments[s];
      return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), n.props = {
        orderList: {
          default: [],
          flag: "",
          orderNo: "",
          list: []
        }
      }, n.$repeat = {
        orderList: {
          com: "shopItemList",
          props: ""
        }
      }, n.$props = {
        shopItemList: {
          "xmlns:v-bind": {
            value: "",
            for: "orderList",
            item: "item",
            index: "index",
            key: "key"
          },
          "v-bind:list.sync": {
            value: "item.orderItemList",
            for: "orderList",
            item: "item",
            index: "index",
            key: "key"
          }
        }
      }, n.$events = {}, n.components = {
        shopItemList: _shop_item_list2.default
      }, n.events = {}, n.methods = {
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
        cancelOrder: function(e) {
          var t = this;
          return _asyncToGenerator(regeneratorRuntime.mark(function r() {
            return regeneratorRuntime.wrap(function(r) {
              for (;;) switch (r.prev = r.next) {
                case 0:
                  return t.flag = 1, t.orderNo = e.currentTarget.dataset.id, r.next = 4, _tip2.default.confirm("是否取消订单");
                case 4:
                  t.editOrderInfo(t.orderNo, t.flag), console.log("取消订单完成");
                case 6:
                case "end":
                  return r.stop()
              }
            }, r, t)
          }))()
        },
        refundOrder: function(e) {
          var t = this;
          return _asyncToGenerator(regeneratorRuntime.mark(function r() {
            return regeneratorRuntime.wrap(function(r) {
              for (;;) switch (r.prev = r.next) {
                case 0:
                  return t.flag = -3, t.orderNo = e.currentTarget.dataset.id, r.next = 4, _tip2.default.confirm("是否申请退款");
                case 4:
                  t.editOrderInfo(t.orderNo, t.flag), console.log("申请退款完成");
                case 6:
                case "end":
                  return r.stop()
              }
            }, r, t)
          }))()
        },
        payMoney: function(e) {
          var t = this;
          return _asyncToGenerator(regeneratorRuntime.mark(function r() {
            var n, o, a, i;
            return regeneratorRuntime.wrap(function(r) {
              for (;;) switch (r.prev = r.next) {
                case 0:
                  return t.orderNo = e.currentTarget.dataset.id, n = e.currentTarget.dataset.tradeno, o = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, a = o.openid, r.next = 6, _api2.default.toPay({
                    query: {
                      openId: a,
                      orderNo: t.orderNo
                    }
                  });
                case 6:
                  i = r.sent, 0 == i.data.code ? wx.requestPayment({
                    appId: i.data.appId,
                    timeStamp: i.data.timeStamp,
                    nonceStr: i.data.nonceStr,
                    package: i.data.package,
                    signType: "MD5",
                    paySign: i.data.paySign,
                    success: function(e) {
                      console.log("pay", e), setTimeout(function() {
                        _tip2.default.loaded(), _wepy2.default.navigateTo({
                          url: "/pages/pay_success?orderNo=" + i.data.tradeNo
                        })
                      }, 2e3)
                    },
                    fail: function(e) {
                      _tip2.default.alert("支付失败")
                    }
                  }) : _tip2.default.alert("支付失败");
                case 8:
                case "end":
                  return r.stop()
              }
            }, r, t)
          }))()
        },
        evaluate: function(e) {
          wx.navigateTo({
            url: "./order_detail_evaluate?orderNo=" + e.currentTarget.dataset.id
          })
        }
      }, o = r, _possibleConstructorReturn(n, o)
    }
    return _inherits(t, e), _createClass(t, [{
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
                return console.log("调用方法"), n = this, o = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, e.next = 5, _api2.default.editOrderInfo({
                  query: {
                    orderNo: t,
                    flag: r
                  }
                });
              case 5:
                a = e.sent, 0 == a.data.code ? this.$emit("refreshOrderList", n.flag) : _tip2.default.error(a.data.errerTips), n.$apply();
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
        console.log("===========lzz返回数据lzz========="), console.log(this.orderList)
      }
    }]), t
  }(_wepy2.default.component);
exports.default = orderItem;