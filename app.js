"use strict";

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}

function _asyncToGenerator(e) {
  return function() {
    var t = e.apply(this, arguments);
    return new Promise(function(e, n) {
      function a(o, r) {
        try {
          var s = t[o](r),
            i = s.value
        } catch (e) {
          return void n(e)
        }
        if (!s.done) return Promise.resolve(i).then(function(e) {
          a("next", e)
        }, function(e) {
          a("throw", e)
        });
        e(i)
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
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
      }
    }
    return function(t, n, a) {
      return n && e(t.prototype, n), a && e(t, a), t
    }
  }(),
  _wepy = require("./npm/wepy/lib/wepy.js"),
  _wepy2 = _interopRequireDefault(_wepy);
require("./npm/wepy-async-function/index.js");
var _constant = require("./utils/constant.js"),
  _api = require("./api/api.js"),
  _default = function(e) {
    function t() {
      _classCallCheck(this, t);
      var e = _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
      return e.config = {
        pages: ["pages/home", "pages/login", "pages/home_detail", "pages/classify", "pages/shop_cart", "pages/info", "pages/search", "pages/test", "pages/sign_in", "pages/exchange_goods", "pages/wholesale", "pages/replenishment_goods", "pages/register", "pages/order", "pages/reorder", "pages/pay_success", "pages/points", "pages/points_more", "pages/points_rule", "pages/collection", "pages/messages", "pages/setting", "pages/goods_detail", "pages/comfire_order", "pages/address", "pages/order_detail", "pages/filter", "pages/logistics", "pages/comment", "pages/comment_add", "pages/order_detail_evaluate", "pages/express_query", "pages/top_list"],
        window: {
          backgroundTextStyle: "dark",
          navigationBarBackgroundColor: "#FFFFFF",
          navigationBarTitleText: "WeChat",
          navigationBarTextStyle: "black",
          enablePullDownRefresh: !1,
          backgroundColor: "#EFEFEF"
        },
        tabBar: {
          color: "#999999",
          selectedColor: "#ff6a3c",
          backgroundColor: "#ffffff",
          borderStyle: "black",
          list: [{
            pagePath: "pages/home",
            text: "首页",
            iconPath: "images/icon_home.png",
            selectedIconPath: "images/icon_home_active.png"
          }, {
            pagePath: "pages/classify",
            text: "分类",
            iconPath: "images/icon_classify.png",
            selectedIconPath: "images/icon_classify_active.png"
          }, {
            pagePath: "pages/shop_cart",
            text: "购物车",
            iconPath: "images/icon_shop_cart.png",
            selectedIconPath: "images/icon_shop_cart_active.png"
          }, {
            pagePath: "pages/info",
            text: "我",
            iconPath: "images/icon_info.png",
            selectedIconPath: "images/icon_info_active.png"
          }]
        }
      }, e.globalData = {
        userInfo: null,
        appid: "",
        secret: ""
      }, e.use("requestfix"), e.use("promisify"), e
    }
    return _inherits(t, e), _createClass(t, [{
      key: "saveUserInfo",
      value: function() {
        function e() {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
          var t, n, a, o;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("------saveUserInfo---开始----"), e.next = 3, _wepy2.default.login();
              case 3:
                if (t = e.sent, !t.code) {
                  e.next = 16;
                  break
                }
                return n = getApp().globalData, e.next = 8, _wepy2.default.getUserInfo();
              case 8:
                return a = e.sent, _wepy2.default.setStorageSync(_constant.USER_INFO, a.userInfo), o = _wepy2.default.getSystemInfoSync(), _wepy2.default.setStorageSync(_constant.SYSTEM_INFO, o), e.next = 14, (0, _api.wxJsCode2Session)({
                  query: {
                    jsCode: t.code,
                    nickName: a.userInfo.nickName
                  }
                }).then(function(e) {
                  var t = e.data;
                  if (console.log("wxJsCode2Session..." + JSON.stringify(t)), t.result) {
                    var n = t.data;
                    if (n.openid) {
                      var a = {};
                      a.openid = n.openid, a.expires_in = Date.now() + n.expires_in, _wepy2.default.setStorageSync(_constant.USER_SPECICAL_INFO, a)
                    }
                    console.log("------saveUserInfo---结束----")
                  }
                });
              case 14:
                e.next = 17;
                break;
              case 16:
                console.log("获取用户登录态失败！" + t.errMsg);
              case 17:
              case "end":
                return e.stop()
            }
          }, e, this)
        }));
        return e
      }()
    }, {
      key: "onLaunch",
      value: function() {
        function e() {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
          var t, n, a;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                console.log("-----登录用户开始-------"), t = this, n = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, a = _wepy2.default.getStorageSync(_constant.USER_INFO) || {}, n.openid && !((n.expires_in || Date.now()) < Date.now() + 600) || a.nickName ? (console.log("-----用户已登录-------"), this.saveUserInfo()) : wx.redirectTo({
                  url: "pages/login"
                });
              case 5:
              case "end":
                return e.stop()
            }
          }, e, this)
        }));
        return e
      }()
    }]), t
  }(_wepy2.default.app);
App(require("./npm/wepy/lib/wepy.js").default.$createApp(_default, {}));