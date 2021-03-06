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
  _constant = require("./../utils/constant.js"),
  _api = require("./../api/api.js"),
  _api2 = _interopRequireDefault(_api),
  _tip = require("./../utils/tip.js"),
  _tip2 = _interopRequireDefault(_tip),
  _discover = require("./../components/discover.js"),
  _discover2 = _interopRequireDefault(_discover),
  _bomb_screen = require("./../components/bomb_screen.js"),
  _bomb_screen2 = _interopRequireDefault(_bomb_screen),
  _bottomLoadMore = require("./../components/common/bottomLoadMore.js"),
  _bottomLoadMore2 = _interopRequireDefault(_bottomLoadMore),
  _placeholder = require("./../components/common/placeholder.js"),
  _placeholder2 = _interopRequireDefault(_placeholder),
  _shop_grid_list = require("./../components/shop_grid_list.js"),
  _shop_grid_list2 = _interopRequireDefault(_shop_grid_list),
  Home = function(e) {
    function t() {
      var e, r, o, n;
      _classCallCheck(this, t);
      for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) i[s] = arguments[s];
      return r = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), o.config = {
        navigationBarTitleText: "捷微商城演示"
      }, o.$repeat = {}, o.$props = {
        discover: {
          "xmlns:v-bind": "",
          "v-bind:list.sync": "discoverList"
        },
        bottomLoadMore: {
          "v-bind:show.sync": "showLoading",
          message: "正在加载"
        },
        placeholder: {
          "v-bind:show.sync": "is_empty",
          message: "暂无发现数据"
        },
        bombscreen: {
          "v-bind:types.sync": "tps",
          "v-bind:show.sync": "is_show_alert",
          "xmlns:v-on": ""
        },
        shopGridList: {
          "v-bind:list.sync": "topicList"
        }
      }, o.$events = {
        bombscreen: {
          "v-on:close": "closeAlert",
          "v-on:callback": "alertCallback"
        }
      }, o.components = {
        discover: _discover2.default,
        bottomLoadMore: _bottomLoadMore2.default,
        placeholder: _placeholder2.default,
        bombscreen: _bomb_screen2.default,
        shopGridList: _shop_grid_list2.default
      }, o.data = {
        img_domain: _constant.IMG_DOMAIN,
        imgUrls: ["../images/image_demo.png"],
        indicatorDots: !0,
        autoplay: !0,
        interval: 3e3,
        duration: 1e3,
        indicatorActiveColor: "#fff",
        discoverList: [],
        is_empty: !1,
        currentPage: 1,
        page_total: 0,
        showLoading: !0,
        preventRepeatReuqest: !1,
        adList: [],
        tps: 0,
        is_show_alert: !0,
        topicList: [],
        topicStickList: []
      }, o.computed = {}, o.methods = {
        goToAdvert: function(e) {
          console.log("url===" + e), 0 != e.length && _wepy2.default.navigateTo({
            url: e
          })
        },
        onShareAppMessage: function(e) {
          return "button" === e.from && console.log(e.target), {
            title: "捷微商城",
            path: "/pages/home",
            success: function(e) {},
            fail: function(e) {}
          }
        },
        alertCallback: function() {
          _tip2.default.alert("跳转")
        },
        closeAlert: function() {}
      }, o.events = {}, n = r, _possibleConstructorReturn(o, n)
    }
    return _inherits(t, e), _createClass(t, [{
      key: "getDiscoverList",
      value: function() {
        function e(e, r) {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
          var o, n;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return o = this, e.next = 3, _api2.default.getHomeDisvocerList({
                  query: {
                    page: t || 1,
                    size: r || 10
                  }
                });
              case 3:
                n = e.sent, 0 == n.data.code ? (o.discoverList = [].concat(_toConsumableArray(o.discoverList), _toConsumableArray(n.data.list)), n.data.page_total && (o.page_total = n.data.page_total), 0 == n.data.page_total && (o.is_empty = !0), o.$apply()) : _tip2.default.error(n.data.msg), o.showLoading = !1;
              case 6:
              case "end":
                return e.stop()
            }
          }, e, this)
        }));
        return e
      }()
    }, {
      key: "getAdList",
      value: function() {
        function e() {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
          var t;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, _api2.default.getAdList({
                  query: {}
                });
              case 2:
                t = e.sent, 0 == t.data.code && (this.adList = t.data.list, this.$apply());
              case 4:
              case "end":
                return e.stop()
            }
          }, e, this)
        }));
        return e
      }()
    }, {
      key: "getTopicGoodsList",
      value: function() {
        function e(e, r) {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
          var o, n;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return o = this, e.next = 3, _api2.default.getTopicGoodsInfo({
                  query: {
                    page: t || 1,
                    size: r || 10,
                    topicType: 3
                  }
                });
              case 3:
                n = e.sent, 0 == n.data.code ? (o.topicList = [].concat(_toConsumableArray(o.topicList), _toConsumableArray(n.data.list)), n.data.page_total && (o.page_total = n.data.page_total), 0 == n.data.page_total && (o.is_empty = !0), o.$apply()) : _tip2.default.error(n.data.msg), o.showLoading = !1;
              case 6:
              case "end":
                return e.stop()
            }
          }, e, this)
        }));
        return e
      }()
    }, {
      key: "getHomeTopicStickList",
      value: function() {
        function e(e, r) {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
          var o, n;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return o = this, e.next = 3, _api2.default.getHomeTopicStickList({
                  query: {
                    page: t || 1,
                    size: r || 3
                  }
                });
              case 3:
                n = e.sent, 0 == n.data.code ? (o.topicStickList = [].concat(_toConsumableArray(o.topicStickList), _toConsumableArray(n.data.list)), o.$apply()) : _tip2.default.error(n.data.msg);
              case 5:
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
        console.log("------onLoad domain-------");
        var e = this;
        this.discoverList = [], e.getHomeTopicStickList(), e.getDiscoverList(), this.getAdList(), this.getTopicGoodsList()
      }
    }, {
      key: "onReachBottom",
      value: function() {
        var e = this;
        if (e.showLoading = !0, console.log(e.page_total + "===" + e.currentPage), e.page_total > e.currentPage) {
          if (e.preventRepeatReuqest) return !0;
          e.preventRepeatReuqest = !0, e.currentPage++, e.getTopicGoodsList(e.currentPage), e.preventRepeatReuqest = !1
        } else e.showLoading = !1
      }
    }]), t
  }(_wepy2.default.page);
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Home, "pages/home"));