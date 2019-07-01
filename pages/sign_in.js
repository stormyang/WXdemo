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
      function r(i, a) {
        try {
          var o = t[i](a),
            s = o.value
        } catch (e) {
          return void n(e)
        }
        if (!o.done) return Promise.resolve(s).then(function(e) {
          r("next", e)
        }, function(e) {
          r("throw", e)
        });
        e(s)
      }
      return r("next")
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
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }
    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t
    }
  }(),
  _wepy = require("./../npm/wepy/lib/wepy.js"),
  _wepy2 = _interopRequireDefault(_wepy),
  _api = require("./../api/api.js"),
  _api2 = _interopRequireDefault(_api),
  _tab = require("./../components/tab.js"),
  _tab2 = _interopRequireDefault(_tab),
  _tip = require("./../utils/tip.js"),
  _tip2 = _interopRequireDefault(_tip),
  _constant = require("./../utils/constant.js"),
  _points_detail = require("./../components/points_detail.js"),
  _points_detail2 = _interopRequireDefault(_points_detail),
  _points_rule = require("./../components/points_rule.js"),
  _points_rule2 = _interopRequireDefault(_points_rule),
  _wepySignTime = require("./../components/common/wepy-sign-time.js"),
  _wepySignTime2 = _interopRequireDefault(_wepySignTime),
  SignIn = function(e) {
    function t() {
      var e, n, r, i;
      _classCallCheck(this, t);
      for (var a = arguments.length, o = Array(a), s = 0; s < a; s++) o[s] = arguments[s];
      return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(o))), r.config = {
        navigationBarTitleText: "签到有礼"
      }, r.$repeat = {}, r.$props = {
        tab: {
          "xmlns:v-on": "",
          "xmlns:v-bind": "",
          "v-bind:currentTab.sync": "currentTab",
          "v-bind:tabList.sync": "tabList"
        },
        pointsDetail: {
          "v-bind:is_empty.sync": "is_empty",
          "v-bind:list.sync": "signList"
        },
        pointsRule: {}
      }, r.$events = {
        tab: {
          "v-on:currentTab": "getCurrentTab"
        }
      }, r.components = {
        tab: _tab2.default,
        pointsDetail: _points_detail2.default,
        pointsRule: _points_rule2.default,
        wepySignTime: _wepySignTime2.default
      }, r.data = {
        currentTab: 0,
        winHeight: 0,
        tabList: ["积分规则", "获得记录"],
        signed: !1,
        score: 0,
        conDays: 0,
        todayScore: 10,
        signList: [],
        is_empty: !1,
        signing: !1
      }, r.computed = {}, r.methods = {
        getCurrentTab: function(e, t) {
          var n = this;
          n.currentTab = e, n.$apply()
        },
        bindChange: function(e) {
          var t = this;
          t.currentTab = e.detail.current, t.$apply()
        },
        sign: function() {
          var e = this;
          e.signed ? _tip2.default.alert("你今天已签过了!") : e.doSign()
        }
      }, r.events = {}, i = n, _possibleConstructorReturn(r, i)
    }
    return _inherits(t, e), _createClass(t, [{
      key: "getUserSign",
      value: function() {
        function e() {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
          var t, n, r, i;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = this, n = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, r = n.openid, e.next = 5, _api2.default.userSginInfo({
                  query: {
                    openId: r
                  }
                });
              case 5:
                i = e.sent, 0 == i.data.code ? (t.signed = i.data.hasSign, t.conDays = i.data.conDays, t.todayScore = i.data.todayScore, t.signList = i.data.list, t.score = i.data.score, console.log("jefe==", t.signList), t.$apply()) : _tip2.default.error(i.data.msg), t.showLoading = !1;
              case 8:
              case "end":
                return e.stop()
            }
          }, e, this)
        }));
        return e
      }()
    }, {
      key: "doSign",
      value: function() {
        function e() {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
          var t, n, r, i;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (t = this, !t.signing) {
                  e.next = 3;
                  break
                }
                return e.abrupt("return");
              case 3:
                return t.signing = !0, n = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, r = n.openid, e.next = 8, _api2.default.doSign({
                  query: {
                    openId: r
                  }
                });
              case 8:
                i = e.sent, 0 == i.data.code ? (_tip2.default.success("恭喜获得" + i.data.todayScore + "积分!", 3e3), t.signed = !0, t.conDays = t.conDays + 1, t.siging = !1, this.getUserSign(), this.$invoke("wepySignTime", "refreshList", ""), t.$apply()) : _wepy2.default.showToast({
                  title: i.data.msg,
                  images: "../images/error.png",
                  duration: 5e3
                });
              case 10:
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
        var e = this,
          t = _wepy2.default.getStorageSync(_constant.SYSTEM_INFO);
        console.log("." + t.windowHeight), e.winHeight = t.windowHeight, e.getUserSign(), e.$apply(), wx.hideShareMenu()
      }
    }]), t
  }(_wepy2.default.page);
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(SignIn, "pages/sign_in"));