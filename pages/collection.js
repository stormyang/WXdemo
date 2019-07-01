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
  _api = require("./../api/api.js"),
  _api2 = _interopRequireDefault(_api),
  _tab = require("./../components/tab.js"),
  _tab2 = _interopRequireDefault(_tab),
  _collection_list = require("./../components/collection_list.js"),
  _collection_list2 = _interopRequireDefault(_collection_list),
  _bottomLoadMore = require("./../components/common/bottomLoadMore.js"),
  _bottomLoadMore2 = _interopRequireDefault(_bottomLoadMore),
  _constant = require("./../utils/constant.js"),
  PointsRules = function(e) {
    function t() {
      var e, r, o, n;
      _classCallCheck(this, t);
      for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) i[s] = arguments[s];
      return r = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), o.config = {
        navigationBarTitleText: ""
      }, o.$repeat = {}, o.$props = {
        tab: {
          "xmlns:v-on": "",
          "xmlns:v-bind": "",
          "v-bind:currentTab.sync": "currentTab",
          "v-bind:tabList.sync": "tabList"
        },
        collectionList: {
          "v-bind:list.sync": "favorlist",
          "xmlns:wx": ""
        }
      }, o.$events = {
        tab: {
          "v-on:currentTab": "getCurrentTab"
        }
      }, o.components = {
        tab: _tab2.default,
        collectionList: _collection_list2.default,
        bottomLoadMore: _bottomLoadMore2.default
      }, o.data = {
        browselist: [],
        favorlist: [],
        tabList: ["我的足迹", "我的收藏"],
        currentTab: 0,
        winHeight: 0,
        currentPage: 1,
        page_total: 0,
        showLoading: !0,
        preventRepeatReuqest: !1
      }, o.computed = {}, o.methods = {
        getCurrentTab: function(e, t) {
          this.currentPage = 1, this.page_total = 0;
          var r = this;
          r.currentTab = e, r.setTitle(e), console.log("cur"), console.log(e), 1 == e ? (r.getUserFavorite(), r.favorlist = {}) : (r.getUserBrowse(), r.browselist = {}), r.$apply()
        },
        bindChange: function(e) {
          var t = this;
          t.currentTab = e.detail.current, console.log("change tab...." + e.detailcurrent), t.$apply()
        }
      }, o.events = {}, n = r, _possibleConstructorReturn(o, n)
    }
    return _inherits(t, e), _createClass(t, [{
      key: "getUserBrowse",
      value: function() {
        function e(e, r) {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
          var o, n, a, i;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return o = this, n = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, a = n.openid, console.log("==========调用aip======="), e.next = 6, _api2.default.browseInfo({
                  query: {
                    openId: a,
                    page: t || 1,
                    size: r || 10
                  }
                });
              case 6:
                i = e.sent, 0 == i.data.code ? (o.browselist = [].concat(_toConsumableArray(o.browselist), _toConsumableArray(i.data.list)), o.page_total = i.data.page_total, console.log("that.browselist"), console.log(o.browselist), o.$apply(), o.$invoke("collectionList", "refreshList", o.browselist)) : tip.error(i.data.msg), o.showLoading = !1;
              case 9:
              case "end":
                return e.stop()
            }
          }, e, this)
        }));
        return e
      }()
    }, {
      key: "getUserFavorite",
      value: function() {
        function e(e, r) {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
          var o, n, a, i;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return o = this, n = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, a = n.openid, e.next = 5, _api2.default.favoriteInfo({
                  query: {
                    openId: a,
                    page: t || 1,
                    size: r || 10
                  }
                });
              case 5:
                i = e.sent, 0 == i.data.code ? (o.favorlist = [].concat(_toConsumableArray(o.favorlist), _toConsumableArray(i.data.list)), o.page_total = i.data.page_total, console.log("==========反正數據======="), console.log(o.favorlist), o.$invoke("collectionList", "refreshList", o.favorlist), o.$apply()) : tip.error(i.data.msg), o.showLoading = !1;
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
        var t = this;
        t.browselist = {}, t.favorlist = {}, t.currentTab = e.type, 0 == e.type ? t.getUserBrowse() : (console.log("调用收藏"), t.getUserFavorite()), t.setTitle(e.type);
        var r = _wepy2.default.getStorageSync(_constant.SYSTEM_INFO);
        t.winHeight = r.windowHeight, t.$apply(), wx.hideShareMenu()
      }
    }, {
      key: "setTitle",
      value: function(e) {
        _wepy2.default.setNavigationBarTitle({
          title: this.tabList[e]
        })
      }
    }, {
      key: "onReachBottom",
      value: function() {
        console.log("加载更多");
        var e = this;
        if (e.showLoading = !0, console.log(e.page_total + "===" + e.currentPage), e.page_total > e.currentPage) {
          if (e.preventRepeatReuqest) return !0;
          e.preventRepeatReuqest = !0, e.currentPage++, console.log(this.currentTab), 0 == this.currentTab ? (console.log("下拉收藏"), e.getUserBrowse(e.currentPage)) : e.getUserFavorite(e.currentPage), e.preventRepeatReuqest = !1
        } else e.showLoading = !1
      }
    }]), t
  }(_wepy2.default.page);
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(PointsRules, "pages/collection"));