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
          var a = t[o](i),
            u = a.value
        } catch (e) {
          return void r(e)
        }
        if (!a.done) return Promise.resolve(u).then(function(e) {
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
  _api = require("./../api/api.js"),
  _api2 = _interopRequireDefault(_api),
  _wepy = require("./../npm/wepy/lib/wepy.js"),
  _wepy2 = _interopRequireDefault(_wepy),
  _tip = require("./../utils/tip.js"),
  _tip2 = _interopRequireDefault(_tip),
  ExpressQuery = function(e) {
    function t() {
      var e, r, n, o;
      _classCallCheck(this, t);
      for (var i = arguments.length, a = Array(i), u = 0; u < i; u++) a[u] = arguments[u];
      return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a))), n.config = {
        navigationBarTitleText: "订单物流"
      }, n.components = {}, n.data = {
        expressType: "",
        expressOrdNum: ""
      }, n.methods = {}, n.events = {}, o = r, _possibleConstructorReturn(n, o)
    }
    return _inherits(t, e), _createClass(t, [{
      key: "getDeliveryInfo",
      value: function() {
        function e(e) {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
          var r, n;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = this, e.next = 3, _api2.default.getDeliveryInfo({
                  query: {
                    orderNo: t
                  }
                });
              case 3:
                n = e.sent, 0 == n.data.code ? (r.expressType = n.data.expressType, r.expressOrdNum = n.data.expressOrdNum) : _tip2.default.error(n.data.msg), r.$apply();
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
        this.getDeliveryInfo(e.orderNo)
      }
    }]), t
  }(_wepy2.default.page);
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(ExpressQuery, "pages/express_query"));