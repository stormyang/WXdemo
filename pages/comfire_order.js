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
      function a(i, n) {
        try {
          var s = t[i](n),
            o = s.value
        } catch (e) {
          return void r(e)
        }
        if (!s.done) return Promise.resolve(o).then(function(e) {
          a("next", e)
        }, function(e) {
          a("throw", e)
        });
        e(o)
      }
      return a("next")
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
        var a = t[r];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
      }
    }
    return function(t, r, a) {
      return r && e(t.prototype, r), a && e(t, a), t
    }
  }(),
  _wepy = require("./../npm/wepy/lib/wepy.js"),
  _wepy2 = _interopRequireDefault(_wepy),
  _api = require("./../api/api.js"),
  _api2 = _interopRequireDefault(_api),
  _tip = require("./../utils/tip.js"),
  _tip2 = _interopRequireDefault(_tip),
  _constant = require("./../utils/constant.js"),
  _wepySwipeDelete = require("./../components/common/wepy-swipe-delete.js"),
  _wepySwipeDelete2 = _interopRequireDefault(_wepySwipeDelete),
  ComfireOrder = function(e) {
    function t() {
      var e, r, a, i;
      _classCallCheck(this, t);
      for (var n = arguments.length, s = Array(n), o = 0; o < n; o++) s[o] = arguments[o];
      return r = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), a.config = {
        navigationBarTitleText: "确认订单"
      }, a.$repeat = {
        list: {
          com: "swipeDelete",
          props: "swipeData"
        }
      }, a.$props = {
        swipeDelete: {
          "xmlns:v-bind": {
            value: "",
            for: "list",
            item: "item",
            index: "index",
            key: "index"
          },
          "v-bind:swipeData.once": {
            value: "item",
            type: "item",
            for: "list",
            item: "item",
            index: "index",
            key: "index"
          },
          "xmlns:v-on": {
            value: "",
            for: "list",
            item: "item",
            index: "index",
            key: "index"
          }
        }
      }, a.$events = {
        swipeDelete: {
          "v-on:delItem": "handleDelItem"
        }
      }, a.components = {
        swipeDelete: _wepySwipeDelete2.default
      }, a.data = {
        img_domain: _constant.IMG_DOMAIN,
        list: [],
        goodsId: "",
        sellerMessage: "",
        is_exit_address: !1,
        address: {},
        totalPrice: 0,
        actualPrice: 0,
        totalfreight: 0,
        purchaseType: 1,
        total_jf_num: 0,
        integralArray: [0],
        integralUnit: 1,
        itg: 0,
        can_use_score: 0,
        deduScore: 0,
        deduFee: 0,
        jf_num: 0,
        reduce_fee: 0,
        operating: !1
      }, a.computed = {}, a.methods = {
        integralPickerChange: function(e) {
          (parseFloat(this.totalPrice) + parseFloat(this.totalfreight) - parseInt(this.integralArray[parseInt(e.detail.value)] / this.integralUnit)).toFixed(2) > 0 ? (this.itg = e.detail.value, this.jf_num = this.integralArray[parseInt(e.detail.value)], this.reduce_fee = parseInt(this.jf_num / this.integralUnit), this.actualPrice = (parseFloat(this.totalPrice) + parseFloat(this.totalfreight) - parseFloat(this.reduce_fee)).toFixed(2)) : _tip2.default.error("付款不能小于0！")
        },
        handleDelItem: function(e) {
          this.deleteGoods(e)
        },
        bindKeyInput: function(e) {
          this.sellerMessage = e.detail.value, console.log("====" + e.detail.value)
        },
        goPay: function(e) {
          var t = this;
          return _asyncToGenerator(regeneratorRuntime.mark(function r() {
            var a;
            return regeneratorRuntime.wrap(function(r) {
              for (;;) switch (r.prev = r.next) {
                case 0:
                  if (a = e.detail.formId, t.is_exit_address) {
                    r.next = 6;
                    break
                  }
                  return r.next = 4, _tip2.default.confirm("你未设置收货地址，请设置地址");
                case 4:
                  return _wepy2.default.navigateTo({
                    url: "/pages/address?type=order"
                  }), r.abrupt("return", !1);
                case 6:
                  t.goToPay(a);
                case 7:
                case "end":
                  return r.stop()
              }
            }, r, t)
          }))()
        },
        setAddress: function() {
          _wepy2.default.navigateTo({
            url: "/pages/address?type=order"
          })
        },
        jianBtnTap: function(e) {
          if (!this.operating) {
            this.operating = !0;
            var t = parseInt(e.currentTarget.dataset.index),
              r = e.currentTarget.dataset.id,
              a = this.list[t].num;
            if (!(a > 1)) return void(this.operating = !1);
            a--, this.reduceGoodNum(r, a, t)
          }
        },
        jiaBtnTap: function(e) {
          if (!this.operating) {
            this.operating = !0;
            var t = parseInt(e.currentTarget.dataset.index),
              r = this.list[t].num,
              a = e.currentTarget.dataset.id;
            r++, this.addGoodNum(a, r, t)
          }
        },
        jfInput: function(e) {
          var t = 10 * e.detail.value / 10;
          if (!/^[0-9]+$/.test(t)) return _tip2.default.error("输入类型有误"), this.jf_num = "", {
            value: ""
          };
          this.can_use_score != t && 0 != t ? this.jf_num = this.can_use_score : this.jf_num = t;
          var r = this.jf_num / this.deduScore;
          return this.reduce_fee = r * this.deduFee, this.actualPrice = this.totalPrice - this.reduce_fee, {
            value: this.jf_num
          }
        }
      }, a.events = {}, i = r, _possibleConstructorReturn(a, i)
    }
    return _inherits(t, e), _createClass(t, [{
      key: "getOrderDetailInfo",
      value: function() {
        function e() {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
          var t, r, a, i, n;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = this, r = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, a = r.openid, e.next = 5, _api2.default.preOrder({
                  query: {
                    openId: a,
                    goodsId: t.goodsId
                  }
                });
              case 5:
                i = e.sent, 0 == i.data.code ? (n = i.data, this.list = n.goodsList, this.totalPrice = n.totalPrice, this.actualPrice = n.actualPrice, this.totalfreight = n.totalfreight, this.is_exit_address || (this.is_exit_address = n.hasDefaultAddress, this.address = n.defaultAddress), this.total_jf_num = n.userScore, this.can_use_score = n.canUseScore, this.deduScore = n.deduScore, this.deduFee = n.deduFee, this.jf_num = n.canUseScore, this.reduce_fee = n.reduceFee, this.integralArray = n.integralArray, this.integralUnit = n.integralUnit) : _tip2.default.error(i.data.msg), t.$apply();
              case 8:
              case "end":
                return e.stop()
            }
          }, e, this)
        }));
        return e
      }()
    }, {
      key: "getAddressInfo",
      value: function() {
        function e(e) {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
          var r, a, i;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = this, a = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, e.next = 4, _api2.default.receiverInfoById({
                  query: {
                    id: t
                  }
                });
              case 4:
                i = e.sent, 0 == i.data.code ? (this.is_exit_address = !0, this.address = i.data.receiverInfo) : _tip2.default.error(i.data.msg), r.$apply();
              case 7:
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
        this.actualPrice = 0, this.totalPrice = 0, this.totalfreight = 0, this.total_jf_num = 0, this.can_use_score = 0, this.deduScore = 0, this.deduFee = 0, this.jf_num = 0, this.reduce_fee = 0, this.operating = !1, t.goodsId = void 0 == e.goodsId ? "" : e.goodsId, this.purchaseType = void 0 == e.purchasetype ? "1" : e.purchasetype, t.getOrderDetailInfo(), "selAdd" == (void 0 == e.from ? "" : e.from) && this.getAddressInfo(_wepy2.default.getStorageSync(_constant.ADDRESS_ID)), wx.hideShareMenu()
      }
    }, {
      key: "goToPay",
      value: function() {
        function e(e) {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
          var r, a, i, n;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return _tip2.default.loading("提交订单中"), r = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, a = r.openid, e.next = 5, _api2.default.saveByCart({
                  query: {
                    openId: a,
                    receiverInfoId: this.address.id,
                    businessMessage: this.sellerMessage,
                    formId: t,
                    reduceScore: this.jf_num
                  }
                });
              case 5:
                if (i = e.sent, 0 != i.data.code) {
                  e.next = 17;
                  break
                }
                if (2 != this.purchaseType) {
                  e.next = 11;
                  break
                }
                return _tip2.default.success("已提交补货申请!"), setTimeout(function() {
                  _tip2.default.loaded(), _wepy2.default.navigateTo({
                    url: "/pages/reorder"
                  })
                }, 2e3), e.abrupt("return");
              case 11:
                return e.next = 13, _api2.default.toPay({
                  query: {
                    openId: a,
                    orderNo: i.data.tradeNo
                  }
                });
              case 13:
                n = e.sent, 0 == n.data.code ? wx.requestPayment({
                  appId: n.data.appId,
                  timeStamp: n.data.timeStamp,
                  nonceStr: n.data.nonceStr,
                  package: n.data.package,
                  signType: "MD5",
                  paySign: n.data.paySign,
                  success: function(e) {
                    console.log("pay", e), setTimeout(function() {
                      _tip2.default.loaded(), _wepy2.default.navigateTo({
                        url: "/pages/pay_success?orderNo=" + n.data.tradeNo
                      })
                    }, 2e3)
                  },
                  fail: function(e) {
                    _tip2.default.alert("支付失败"), setTimeout(function() {
                      _tip2.default.loaded(), _wepy2.default.navigateTo({
                        url: "/pages/order"
                      })
                    }, 2e3)
                  }
                }) : (_tip2.default.alert("支付失败"), setTimeout(function() {
                  _tip2.default.loaded(), _wepy2.default.navigateTo({
                    url: "/pages/order"
                  })
                }, 2e3)), e.next = 18;
                break;
              case 17:
                _tip2.default.error(i.data.msg);
              case 18:
              case "end":
                return e.stop()
            }
          }, e, this)
        }));
        return e
      }()
    }, {
      key: "reduceGoodNum",
      value: function() {
        function e(e, r, a) {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r, a) {
          var i, n, s;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return i = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, n = i.openid, e.next = 4, _api2.default.cartUpdateNum({
                  query: {
                    openId: n,
                    id: t,
                    num: r
                  }
                });
              case 4:
                s = e.sent, 0 == s.data.code ? (this.list[a].num = r, this.totalPrice = (parseFloat(this.totalPrice) - parseFloat(this.list[a].price)).toFixed(2), this.actualPrice = (parseFloat(this.totalPrice) + parseFloat(this.totalfreight) - parseFloat(this.reduce_fee)).toFixed(2), this.operating = !1) : _tip2.default.error(s.data.msg), this.$apply();
              case 7:
              case "end":
                return e.stop()
            }
          }, e, this)
        }));
        return e
      }()
    }, {
      key: "addGoodNum",
      value: function() {
        function e(e, r, a) {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r, a) {
          var i, n, s;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return i = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, n = i.openid, e.next = 4, _api2.default.cartUpdateNum({
                  query: {
                    openId: n,
                    id: t,
                    num: r
                  }
                });
              case 4:
                s = e.sent, 0 == s.data.code ? (this.list[a].num = r, this.totalPrice = (parseFloat(this.totalPrice) + parseFloat(this.list[a].price)).toFixed(2), this.actualPrice = (parseFloat(this.totalPrice) + parseFloat(this.totalfreight) - parseFloat(this.reduce_fee)).toFixed(2), this.operating = !1) : _tip2.default.error(s.data.msg), this.$apply();
              case 7:
              case "end":
                return e.stop()
            }
          }, e, this)
        }));
        return e
      }()
    }, {
      key: "deleteGoods",
      value: function() {
        function e(e) {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
          var r, a, i, n, s, o;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = t.id, a = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, i = a.openid, e.next = 5, _api2.default.cartDel({
                  query: {
                    openId: i,
                    cartIdList: [r]
                  }
                });
              case 5:
                if (n = e.sent, 0 != n.data.code) {
                  e.next = 23;
                  break
                }
                s = [], o = 0;
              case 9:
                if (!(o < this.list.length)) {
                  e.next = 20;
                  break
                }
                if (this.list[o].id != r) {
                  e.next = 16;
                  break
                }
                return this.totalPrice -= parseInt(this.list[o].priceSubtotal), this.actualPrice = this.totalPrice - this.reduce_fee, e.abrupt("continue", 17);
              case 16:
                s.push(this.list[o]);
              case 17:
                o++, e.next = 9;
                break;
              case 20:
                this.list = s, e.next = 24;
                break;
              case 23:
                _tip2.default.error(n.data.msg);
              case 24:
                this.$apply();
              case 25:
              case "end":
                return e.stop()
            }
          }, e, this)
        }));
        return e
      }()
    }]), t
  }(_wepy2.default.page);
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(ComfireOrder, "pages/comfire_order"));