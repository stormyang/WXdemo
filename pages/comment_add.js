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
      function o(n, a) {
        try {
          var i = t[n](a),
            u = i.value
        } catch (e) {
          return void r(e)
        }
        if (!i.done) return Promise.resolve(u).then(function(e) {
          o("next", e)
        }, function(e) {
          o("throw", e)
        });
        e(u)
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
  _rate = require("./../components/rate.js"),
  _rate2 = _interopRequireDefault(_rate),
  _api = require("./../api/api.js"),
  _api2 = _interopRequireDefault(_api),
  _tip = require("./../utils/tip.js"),
  _tip2 = _interopRequireDefault(_tip),
  _constant = require("./../utils/constant.js"),
  goodsComment = function(e) {
    function t() {
      var e, r, o, n;
      _classCallCheck(this, t);
      for (var a = arguments.length, i = Array(a), u = 0; u < a; u++) i[u] = arguments[u];
      return r = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), o.config = {
        navigationBarTitleText: "商品评论"
      }, o.data = {
        goodsId: "",
        priceId: "",
        grade: 0,
        content: "",
        goodsName: "",
        orderNo: ""
      }, o.$repeat = {}, o.$props = {
        rate: {
          "xmlns:v-on": ""
        }
      }, o.$events = {
        rate: {
          "v-on:change": "callbackStart"
        }
      }, o.components = {
        rate: _rate2.default
      }, o.computed = {}, o.methods = {
        bindText: function(e) {
          this.content = e.detail.value, this.$apply()
        },
        callbackStart: function(e) {
          this.grade = e, this.$apply()
        }
      }, o.events = {}, n = r, _possibleConstructorReturn(o, n)
    }
    return _inherits(t, e), _createClass(t, [{
      key: "onLoad",
      value: function(e) {
        this.orderNo = e.orderNo, this.goodsId = e.goodsId, this.priceId = e.priceId, this.goodsName = e.goodsName, this.$apply(), wx.hideShareMenu()
      }
    }, {
      key: "formSubmit",
      value: function() {
        function e(e) {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
          var r, o, n, a, i;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, o = r.openid, n = this, a = t.detail.value, e.next = 6, _api2.default.saveGoodsEvaluate({
                  query: {
                    grade: n.grade,
                    content: n.content,
                    goodsId: n.goodsId,
                    priceId: n.priceId,
                    openId: o,
                    goodsName: n.goodsName,
                    orderNo: n.orderNo
                  }
                });
              case 6:
                i = e.sent, 0 == i.data.code ? (_tip2.default.success("评论成功", 1e3), _wepy2.default.redirectTo({
                  url: "/pages/order_detail_evaluate?orderNo=" + n.orderNo
                })) : _tip2.default.error(i.data.msg);
              case 8:
              case "end":
                return e.stop()
            }
          }, e, this)
        }));
        return e
      }()
    }]), t
  }(_wepy2.default.page);
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(goodsComment, "pages/comment_add"));