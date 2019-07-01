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
      function n(a, o) {
        try {
          var i = t[a](o),
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
  _tip = require("./../utils/tip.js"),
  _tip2 = _interopRequireDefault(_tip),
  _constant = require("./../utils/constant.js"),
  Register = function(e) {
    function t() {
      var e, r, n, a;
      _classCallCheck(this, t);
      for (var o = arguments.length, i = Array(o), u = 0; u < o; u++) i[u] = arguments[u];
      return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), n.config = {
        navigationBarTitleText: "绑定手机"
      }, n.components = {}, n.data = {
        phone: "",
        sendMsgDisabled: !1,
        time: 60
      }, n.computed = {}, n.methods = {
        phoneInput: function(e) {
          this.phone = e.detail.value
        },
        sendCode: function(e) {
          if ("" == this.phone) return _tip2.default.alert("输入手机号码"), !1;
          this.sendVerifyCode();
          var t = this;
          t.sendMsgDisabled = !0;
          var r = setInterval(function() {
            t.time-- <= 0 && (t.time = 10, t.sendMsgDisabled = !1, clearInterval(r), t.$apply()), t.$apply()
          }, 1e3)
        },
        formSubmit: function(e) {
          var t = this,
            r = e.detail.value.phone,
            n = e.detail.value.code;
          return "" == r ? (_tip2.default.alert("输入手机号码"), !1) : "" == n ? (_tip2.default.alert("输入验证码"), !1) : (t.registerUser(r, n), void console.log("form发生了submit事件，携带数据为：", e.detail.value))
        }
      }, a = r, _possibleConstructorReturn(n, a)
    }
    return _inherits(t, e), _createClass(t, [{
      key: "sendVerifyCode",
      value: function() {
        function e() {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
          var t, r, n;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, r = t.openid, e.next = 4, _api2.default.sendRandCode({
                  query: {
                    phone: this.phone,
                    openId: r
                  }
                });
              case 4:
                n = e.sent, 0 == n.data.code ? (_tip2.default.success("发送成功!"), this.$apply()) : _tip2.default.error(n.data.msg);
              case 6:
              case "end":
                return e.stop()
            }
          }, e, this)
        }));
        return e
      }()
    }, {
      key: "registerUser",
      value: function() {
        function e(e, r) {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
          var n, a, o, i;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return n = this, a = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, o = a.openid, e.next = 5, _api2.default.registerUser({
                  query: {
                    openId: o,
                    mobile: t,
                    verificationCode: r
                  }
                });
              case 5:
                i = e.sent, 0 == i.data.code ? (_wepy2.default.navigateBack(), console.log("绑定成功....."), n.$apply()) : _tip2.default.error(i.data.msg), n.showLoading = !1;
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
        wx.hideShareMenu()
      }
    }]), t
  }(_wepy2.default.page);
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Register, "pages/register"));