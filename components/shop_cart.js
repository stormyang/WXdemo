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
      function i(n, a) {
        try {
          var s = t[n](a),
            o = s.value
        } catch (e) {
          return void r(e)
        }
        if (!s.done) return Promise.resolve(o).then(function(e) {
          i("next", e)
        }, function(e) {
          i("throw", e)
        });
        e(o)
      }
      return i("next")
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
        var i = t[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
    }
    return function(t, r, i) {
      return r && e(t.prototype, r), i && e(t, i), t
    }
  }(),
  _wepy = require("./../npm/wepy/lib/wepy.js"),
  _wepy2 = _interopRequireDefault(_wepy),
  _api = require("./../api/api.js"),
  _api2 = _interopRequireDefault(_api),
  _tip = require("./../utils/tip.js"),
  _tip2 = _interopRequireDefault(_tip),
  _constant = require("./../utils/constant.js"),
  _wepySwipeDelete = require("./common/wepy-swipe-delete.js"),
  _wepySwipeDelete2 = _interopRequireDefault(_wepySwipeDelete),
  shopCart = function(e) {
    function t() {
      var e, r, i, n;
      _classCallCheck(this, t);
      for (var a = arguments.length, s = Array(a), o = 0; o < a; o++) s[o] = arguments[o];
      return r = i = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), i.$repeat = {
        list: {
          com: "swipeDelete",
          props: "swipeData"
        }
      }, i.$props = {
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
      }, i.$events = {
        swipeDelete: {
          "v-on:delItem": "handleDelItem"
        }
      }, i.components = {
        swipeDelete: _wepySwipeDelete2.default
      }, i.data = {
        img_domain: _constant.IMG_DOMAIN,
        list: [],
        noSelect: !1,
        saveHidden: !0,
        totalPrice: 0,
        operating: !1,
        allChecked: !0
      }, i.computed = {}, i.methods = {
        handleDelItem: function(e) {
          this.deleteGoods(e)
        },
        selectTap: function(e) {
          var t = e.currentTarget.dataset.id,
            r = parseInt(e.currentTarget.dataset.index),
            i = this.list[r].ischecked;
          this.checkGoods(t, r, i)
        },
        selectAll: function() {
          console.log("sele...."), this.checkAllGoods()
        },
        getCartListMethod: function() {
          this.getCartList()
        },
        jianBtnTap: function(e) {
          if (!this.operating) {
            this.operating = !0;
            var t = e.currentTarget.dataset.id,
              r = parseInt(e.currentTarget.dataset.index),
              i = this.list[r].num;
            i > 1 && (i--, this.reduceGoodNum(t, i, r))
          }
        },
        jiaBtnTap: function(e) {
          var t = e.currentTarget.dataset.id,
            r = parseInt(e.currentTarget.dataset.index),
            i = this.list[r].num;
          i++, this.addGoodNum(t, i, r)
        },
        toPayOrder: function() {
          for (var e = 1, t = 1, r = !0, i = 0, n = 0; n < this.list.length; n++)
            if (this.list[n].ischecked) {
              if (e = this.list[n].type, i > 0 && e != t) {
                r = !1;
                break
              }
              t = e, i++
            }
          if (!r) return void _tip2.default.alert("先把补货的商品结算!");
          _wepy2.default.navigateTo({
            url: "/pages/comfire_order?purchasetype=" + e
          })
        },
        goIndex: function() {
          _wepy2.default.switchTab({
            url: "/pages/home"
          })
        }
      }, i.events = {}, n = r, _possibleConstructorReturn(i, n)
    }
    return _inherits(t, e), _createClass(t, [{
      key: "getCartList",
      value: function() {
        function e() {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
          var t, r, i, n, a, s;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = this, r = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, i = r.openid, e.next = 5, _api2.default.cartList({
                  query: {
                    openId: i
                  }
                });
              case 5:
                if (n = e.sent, 0 != n.data.code) {
                  e.next = 20;
                  break
                }
                a = n.data, this.list = a.list, this.totalPrice = a.totalPrice, s = 0;
              case 11:
                if (!(s < this.list.length)) {
                  e.next = 18;
                  break
                }
                if (this.list[s].ischecked) {
                  e.next = 15;
                  break
                }
                return this.allChecked = !1, e.abrupt("break", 18);
              case 15:
                s++, e.next = 11;
                break;
              case 18:
                e.next = 21;
                break;
              case 20:
                _tip2.default.error(n.data.msg);
              case 21:
                t.$apply();
              case 22:
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
        this.operating = !1
      }
    }, {
      key: "checkGoods",
      value: function() {
        function e(e, r, i) {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r, i) {
          var n, a, s;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return n = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, a = n.openid, e.next = 4, _api2.default.cartCheck({
                  query: {
                    openId: a,
                    id: t
                  }
                });
              case 4:
                s = e.sent, 0 == s.data.code ? (this.list[r].ischecked = !i, this.list[r].ischecked ? this.totalPrice = (parseFloat(this.totalPrice) + parseFloat(this.list[r].price) * this.list[r].num).toFixed(2) : this.totalPrice = (parseFloat(this.totalPrice) - parseFloat(this.list[r].price) * this.list[r].num).toFixed(2)) : _tip2.default.error(s.data.msg), this.$apply();
              case 7:
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
        function e(e, r, i) {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r, i) {
          var n, a, s;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return n = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, a = n.openid, e.next = 4, _api2.default.cartUpdateNum({
                  query: {
                    openId: a,
                    id: t,
                    num: r
                  }
                });
              case 4:
                s = e.sent, 0 == s.data.code ? (this.list[i].num = r, this.list[i].ischecked && (this.totalPrice = (parseFloat(this.totalPrice) - parseFloat(this.list[i].price)).toFixed(2)), this.operating = !1) : _tip2.default.error(s.data.msg), this.$apply();
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
        function e(e, r, i) {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r, i) {
          var n, a, s;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return n = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, a = n.openid, e.next = 4, _api2.default.cartUpdateNum({
                  query: {
                    openId: a,
                    id: t,
                    num: r
                  }
                });
              case 4:
                s = e.sent, 0 == s.data.code ? (this.list[i].num = r, this.list[i].ischecked && (this.totalPrice = (parseFloat(this.totalPrice) + parseFloat(this.list[i].price)).toFixed(2)), this.operating = !1) : _tip2.default.error(s.data.msg), this.$apply();
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
          var r, i, n, a, s, o;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = t.id, i = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, n = i.openid, e.next = 5, _api2.default.cartDel({
                  query: {
                    openId: n,
                    cartIdList: r
                  }
                });
              case 5:
                if (a = e.sent, 0 != a.data.code) {
                  e.next = 22;
                  break
                }
                s = [], o = 0;
              case 9:
                if (!(o < this.list.length)) {
                  e.next = 19;
                  break
                }
                if (this.list[o].id != r) {
                  e.next = 15;
                  break
                }
                return this.list[o].ischecked && (this.totalPrice = (parseFloat(this.totalPrice) - parseFloat(this.list[o].price) * this.list[o].num).toFixed(2)), e.abrupt("continue", 16);
              case 15:
                s.push(this.list[o]);
              case 16:
                o++, e.next = 9;
                break;
              case 19:
                this.list = s, e.next = 23;
                break;
              case 22:
                _tip2.default.error(a.data.msg);
              case 23:
                this.$apply();
              case 24:
              case "end":
                return e.stop()
            }
          }, e, this)
        }));
        return e
      }()
    }, {
      key: "checkAllGoods",
      value: function() {
        function e() {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
          var t, r, i, n, a;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, r = t.openid, i = 0, this.allChecked || (i = 1), e.next = 6, _api2.default.cartCheckAll({
                  query: {
                    openId: r,
                    check: i
                  }
                });
              case 6:
                if (n = e.sent, 0 == n.data.code) {
                  for (this.totalPrice = 0, a = 0; a < this.list.length; a++) this.list[a].ischecked = !this.allChecked, this.allChecked || (this.totalPrice = (parseFloat(this.totalPrice) + parseFloat(this.list[a].price) * this.list[a].num).toFixed(2));
                  this.allChecked = !this.allChecked
                } else _tip2.default.error(n.data.msg);
                this.$apply();
              case 9:
              case "end":
                return e.stop()
            }
          }, e, this)
        }));
        return e
      }()
    }]), t
  }(_wepy2.default.component);
exports.default = shopCart;