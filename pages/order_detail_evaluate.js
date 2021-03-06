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
  _tip = require("./../utils/tip.js"),
  _tip2 = _interopRequireDefault(_tip),
  _shop_evaluate_list = require("./../components/shop_evaluate_list.js"),
  _shop_evaluate_list2 = _interopRequireDefault(_shop_evaluate_list),
  _api = require("./../api/api.js"),
  _api2 = _interopRequireDefault(_api),
  _constant = require("./../utils/constant.js"),
  OrderDetailEvaluate = function(e) {
    function t() {
      var e, r, o, n;
      _classCallCheck(this, t);
      for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) i[s] = arguments[s];
      return r = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), o.config = {
        navigationBarTitleText: "订单详情"
      }, o.data = {
        obj: {},
        orderNo: "",
        flag: "",
        list: []
      }, o.$repeat = {}, o.$props = {
        shopEvaluateList: {
          "xmlns:v-bind": "",
          "v-bind:goodsList.sync": "list",
          "v-bind:orderNo.sync": "orderNo"
        }
      }, o.$events = {}, o.components = {
        shopEvaluateList: _shop_evaluate_list2.default
      }, o.computed = {}, o.methods = {}, o.events = {}, n = r, _possibleConstructorReturn(o, n)
    }
    return _inherits(t, e), _createClass(t, [{
      key: "getOrderInfo",
      value: function() {
        function e(e, r) {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
          var o, n, a;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return o = this, n = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, e.next = 4, _api2.default.getOrderInfo({
                  query: {
                    orderNo: this.orderNo
                  }
                });
              case 4:
                a = e.sent, 0 == a.data.code ? (this.obj = a.data.obj, o.list = [], o.list = [].concat(_toConsumableArray(o.list), _toConsumableArray(a.data.obj.orderItemList)), o.$invoke("shopEvaluateList", "refreshList", o.list), console.log("========list返回数据========"), console.log(o.list), console.log(a.data.obj.orderItemList)) : _tip2.default.error(a.data.msg), o.$apply();
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
        this.orderNo = e.orderNo, t.getOrderInfo(), wx.hideShareMenu()
      }
    }]), t
  }(_wepy2.default.page);
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(OrderDetailEvaluate, "pages/order_detail_evaluate"));