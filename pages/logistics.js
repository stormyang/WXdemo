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
      function n(o, i) {
        try {
          var s = t[o](i),
            a = s.value
        } catch (e) {
          return void r(e)
        }
        if (!s.done) return Promise.resolve(a).then(function(e) {
          n("next", e)
        }, function(e) {
          n("throw", e)
        });
        e(a)
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
  _tip = require("./../utils/tip.js"),
  _tip2 = _interopRequireDefault(_tip),
  _wepy = require("./../npm/wepy/lib/wepy.js"),
  _wepy2 = _interopRequireDefault(_wepy),
  _timer = require("./../components/common/timer.js"),
  _timer2 = _interopRequireDefault(_timer),
  _api = require("./../api/api.js"),
  _api2 = _interopRequireDefault(_api),
  _constant = require("./../utils/constant.js"),
  exchangeGoods = function(e) {
    function t() {
      var e, r, n, o;
      _classCallCheck(this, t);
      for (var i = arguments.length, s = Array(i), a = 0; a < i; a++) s[a] = arguments[a];
      return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), n.config = {
        navigationBarTitleText: "订单物流"
      }, n.data = {
        list: [],
        orderNo: "",
        orderExpress: {},
        expresses: {}
      }, n.components = {
        timer: _timer2.default
      }, n.computed = {}, n.methods = {}, n.events = {}, o = r, _possibleConstructorReturn(n, o)
    }
    return _inherits(t, e), _createClass(t, [{
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
                return console.log("order88No"), t = this, r = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, e.next = 5, _api2.default.orderExpressInfo({
                  query: {
                    orderNo: this.orderNo
                  }
                });
              case 5:
                n = e.sent, 0 == n.data.code ? (t.list = n.data.list, t.orderExpress = n.data.orderExpress, t.expresses = n.data.expresses, console.log("========list返回数据========"), console.log(t.list)) : _tip2.default.error(n.data.msg), t.$apply();
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
        this.orderNo = e.orderNo, console.log(this.orderNo), this.getOrderExpressInfo(), wx.hideShareMenu()
      }
    }]), t
  }(_wepy2.default.page);
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(exchangeGoods, "pages/logistics"));