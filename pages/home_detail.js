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
      function o(i, n) {
        try {
          var a = t[i](n),
            s = a.value
        } catch (e) {
          return void r(e)
        }
        if (!a.done) return Promise.resolve(s).then(function(e) {
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
  _filter_bar = require("./../components/filter_bar.js"),
  _filter_bar2 = _interopRequireDefault(_filter_bar),
  _shop_grid_list = require("./../components/shop_grid_list.js"),
  _shop_grid_list2 = _interopRequireDefault(_shop_grid_list),
  _bottomLoadMore = require("./../components/common/bottomLoadMore.js"),
  _bottomLoadMore2 = _interopRequireDefault(_bottomLoadMore),
  _placeholder = require("./../components/common/placeholder.js"),
  _placeholder2 = _interopRequireDefault(_placeholder),
  _tip = require("./../utils/tip.js"),
  _tip2 = _interopRequireDefault(_tip),
  _constant = require("./../utils/constant.js"),
  HomeDetail = function(e) {
    function t() {
      var e, r, o, i;
      _classCallCheck(this, t);
      for (var n = arguments.length, a = Array(n), s = 0; s < n; s++) a[s] = arguments[s];
      return r = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a))), o.config = {
        navigationBarTitleText: ""
      }, o.data = {
        img_domain: _constant.IMG_DOMAIN,
        topicId: "",
        cate: {},
        list: [],
        purchasetype: 1,
        is_empty: !1,
        currentPage: 1,
        page_total: 0,
        showLoading: !0,
        preventRepeatReuqest: !1,
        sort: 1,
        skuval: ""
      }, o.$repeat = {}, o.$props = {
        filterBar: {
          "xmlns:v-on": ""
        },
        shopGridList: {
          "xmlns:v-bind": "",
          "v-bind:purchasetype.sync": "purchasetype",
          "v-bind:list.sync": "list"
        },
        bottomLoadMore: {
          "v-bind:show.sync": "showLoading",
          message: "正在加载"
        },
        placeholder: {
          "v-bind:show.sync": "is_empty",
          message: "暂无发现数据"
        }
      }, o.$events = {
        filterBar: {
          "v-on:currentType": "currentType"
        }
      }, o.components = {
        filterBar: _filter_bar2.default,
        shopGridList: _shop_grid_list2.default,
        bottomLoadMore: _bottomLoadMore2.default,
        placeholder: _placeholder2.default
      }, o.computed = {}, o.methods = {
        currentType: function(e) {
          var t = e.name,
            r = e.type;
          "zonghe" == t ? this.sort = -1 : "sale" == t ? this.sort = 3 : "price" == t ? "asc" == r ? this.sort = 2 : "desc" == r && (this.sort = 1) : "sku" == t && (this.skuval = r), this.list = [], this.showLoading = !0, this.is_empty = !1, this.getGoodList()
        },
        onShareAppMessage: function(e) {
          return "button" === e.from && console.log(e.target), {
            title: this.cate.name,
            path: "/pages/home_detail?code=" + this.topicId,
            success: function(e) {},
            fail: function(e) {}
          }
        }
      }, o.events = {}, i = r, _possibleConstructorReturn(o, i)
    }
    return _inherits(t, e), _createClass(t, [{
      key: "getGoodList",
      value: function() {
        function e(e, r) {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
          var o, i;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return o = this, e.next = 3, _api2.default.hostGoodsList({
                  query: {
                    page: t || 1,
                    size: r || 10,
                    topicId: this.topicId,
                    sort: this.sort,
                    skuval: this.skuval
                  }
                });
              case 3:
                i = e.sent, 0 == i.data.code ? (o.cate = i.data.topic, wx.setNavigationBarTitle({
                  title: o.cate.title
                }), o.list = [].concat(_toConsumableArray(o.list), _toConsumableArray(i.data.list)), o.page_total = i.data.page_total, 0 == i.data.page_total && (o.is_empty = !0)) : _tip2.default.error(i.data.msg), o.showLoading = !1, o.$apply();
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
        this.cate = {}, this.list = [], this.skuval = "", this.topicId = e.code, this.is_empty = !1, this.currentPage = 1, this.page_total = 0, this.showLoading = !0, this.preventRepeatReuqest = !1, this.sort = 1, console.log("id===" + this.topicId), this.getGoodList(), wx.hideShareMenu()
      }
    }, {
      key: "onReachBottom",
      value: function() {
        var e = this;
        if (e.showLoading = !0, console.log(e.page_total + "===" + e.currentPage), e.page_total > e.currentPage) {
          if (e.preventRepeatReuqest) return !0;
          e.preventRepeatReuqest = !0, e.currentPage++, e.getGoodList(e.currentPage), e.preventRepeatReuqest = !1
        } else e.showLoading = !1
      }
    }]), t
  }(_wepy2.default.page);
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(HomeDetail, "pages/home_detail"));