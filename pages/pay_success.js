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
            u = i.value
        } catch (e) {
          return void r(e)
        }
        if (!i.done) return Promise.resolve(u).then(function(e) {
          n("next", e)
        }, function(e) {
          n("throw", e)
        });
        e(u)
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
  _api = require("./../api/api.js"),
  _api2 = _interopRequireDefault(_api),
  _constant = require("./../utils/constant.js"),
  _tip = require("./../utils/tip.js"),
  _tip2 = _interopRequireDefault(_tip),
  paySuccess = function(e) {
    function t() {
      var e, r, n, o;
      _classCallCheck(this, t);
      for (var a = arguments.length, i = Array(a), u = 0; u < a; u++) i[u] = arguments[u];
      return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), n.config = {
        navigationBarTitleText: "支付成功"
      }, n.data = {
        orderNo: "",
        totalFee: 0
      }, n.components = {}, n.computed = {}, n.methods = {
        goOrderDetail: function() {
          _wepy2.default.redirectTo({
            url: "/pages/order"
          })
        },
        goIndex: function() {
          _wepy2.default.switchTab({
            url: "/pages/home"
          })
        }
      }, n.events = {}, o = r, _possibleConstructorReturn(n, o)
    }
    return _inherits(t, e), _createClass(t, [{
      key: "getPayOrderDetail",
      value: function() {
        function e() {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
          var t, r;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = this, e.next = 3, _api2.default.getPayOrderDetail({
                  query: {
                    tradeNo: this.orderNo
                  }
                });
              case 3:
                r = e.sent, 0 == r.data.code ? this.totalFee = r.data.order.totalFee : _tip2.default.error(r.data.msg), t.$apply();
              case 6:
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
        this.orderNo = e.orderNo, this.getPayOrderDetail(), wx.hideShareMenu()
      }
    }]), t
  }(_wepy2.default.page);
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(paySuccess, "pages/pay_success"));