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
      function o(i, a) {
        try {
          var s = t[i](a),
            n = s.value
        } catch (e) {
          return void r(e)
        }
        if (!s.done) return Promise.resolve(n).then(function(e) {
          o("next", e)
        }, function(e) {
          o("throw", e)
        });
        e(n)
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
  _tip = require("./../utils/tip.js"),
  _tip2 = _interopRequireDefault(_tip),
  _constant = require("./../utils/constant.js"),
  _search = require("./../components/search.js"),
  _search2 = _interopRequireDefault(_search),
  _filter_bar = require("./../components/filter_bar.js"),
  _filter_bar2 = _interopRequireDefault(_filter_bar),
  _shop_grid_list = require("./../components/shop_grid_list.js"),
  _shop_grid_list2 = _interopRequireDefault(_shop_grid_list),
  _bottomLoadMore = require("./../components/common/bottomLoadMore.js"),
  _bottomLoadMore2 = _interopRequireDefault(_bottomLoadMore),
  _placeholder = require("./../components/common/placeholder.js"),
  _placeholder2 = _interopRequireDefault(_placeholder),
  _filterSlider = require("./../components/filterSlider.js"),
  _filterSlider2 = _interopRequireDefault(_filterSlider),
  Search = function(e) {
    function t() {
      var e, r, o, i;
      _classCallCheck(this, t);
      for (var a = arguments.length, s = Array(a), n = 0; n < a; n++) s[n] = arguments[n];
      return r = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), o.config = {
        navigationBarTitleText: "搜索"
      }, o.$repeat = {}, o.$props = {
        search: {
          "xmlns:v-on": ""
        },
        filterBar: {
          "xmlns:wx": ""
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
        search: {
          "v-on:searchValue": "doSearch"
        },
        filterBar: {
          "v-on:currentType": "currentType"
        }
      }, o.components = {
        search: _search2.default,
        filterBar: _filter_bar2.default,
        filterSlider: _filterSlider2.default,
        shopGridList: _shop_grid_list2.default,
        bottomLoadMore: _bottomLoadMore2.default,
        placeholder: _placeholder2.default
      }, o.data = {
        list: [],
        showLoading: !1,
        purchasetype: 1,
        is_empty: !1,
        is_filter: !1,
        currentPage: 1,
        page_total: 0,
        keyword: "",
        keywordhisList: [],
        cateCode: "",
        show: !0,
        sort: -1,
        title: "",
        skuval: "",
        curName: "",
        curType: ""
      }, o.computed = {}, o.methods = {
        doSearch: function(e) {
          this.list = [], this.is_empty = !1, this.showLoading = !0, this.keyword = e, this.doSearchGoods(e)
        },
        currentType: function(e) {
          var t = e.name,
            r = e.type;
          "zonghe" == t ? this.sort = -1 : "sale" == t ? this.sort = 3 : "price" == t ? "desc" == r ? this.sort = 2 : "asc" == r && (this.sort = 1) : "sku" == t && (this.skuval = r), this.list = [], this.is_empty = !1, this.showLoading = !0, this.show = !1, this.curName = t, this.curType = r, this.$apply(), this.doSearchGoods(this.keyword)
        },
        selHisKeyWord: function(e) {
          console.log(e);
          for (var t = e.currentTarget.dataset.id, r = "", o = 0; o < this.keywordhisList.length; o++) this.keywordhisList[o].sel = 0, t == this.keywordhisList[o].id && (r = this.keywordhisList[o].keyword, this.keywordhisList[o].sel = 1);
          r.length > 0 && (this.keyword = r, this.doSearchGoods(r))
        },
        clearHis: function() {
          this.clearUserKeywords()
        },
        onShareAppMessage: function(e) {
          return "button" === e.from && console.log(e.target), {
            title: this.detail.name,
            path: "/pages/search?cateCode=" + this.cateCode + "&title=" + this.title,
            success: function(e) {},
            fail: function(e) {}
          }
        }
      }, i = r, _possibleConstructorReturn(o, i)
    }
    return _inherits(t, e), _createClass(t, [{
      key: "getKeyWordHisList",
      value: function() {
        function e() {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
          var t, r, o;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, r = t.openid, e.next = 4, _api2.default.searchKeywordList({
                  query: {
                    openId: r
                  }
                });
              case 4:
                o = e.sent, 0 == o.data.code && (this.keywordhisList = o.data.list), this.$apply();
              case 7:
              case "end":
                return e.stop()
            }
          }, e, this)
        }));
        return e
      }()
    }, {
      key: "setTitle",
      value: function(e) {
        _wepy2.default.setNavigationBarTitle({
          title: e
        })
      }
    }, {
      key: "onLoad",
      value: function(e) {
        this.list = [], this.skuval = "", this.cateCode = e.cateCode, void 0 != this.cateCode && this.cateCode.length > 0 ? (this.$invoke("search", "show", "0"), this.show = !1, this.doSearchGoods(""), this.title = "" + e.title, this.setTitle("" + e.title)) : (this.$invoke("search", "show", "1"), this.show = !0, this.getKeyWordHisList()), wx.hideShareMenu()
      }
    }, {
      key: "doSearchGoods",
      value: function() {
        function e(e, r, o) {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r, o) {
          var i, a, s, n, u;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return i = this, e.next = 3, _api2.default.getGoodsList({
                  query: {
                    page: r || 1,
                    size: o || 10,
                    searchKeyWords: this.keyword,
                    cateCode: this.cateCode || "",
                    sort: this.sort,
                    skuval: this.skuval,
                    currentType: i.curName,
                    arrowType: i.curType
                  }
                });
              case 3:
                if (a = e.sent, 0 == a.data.code ? (i.list = [].concat(_toConsumableArray(i.list), _toConsumableArray(a.data.list)), i.page_total = a.data.page_total, 0 == a.data.page_total && (i.is_empty = !0)) : _tip2.default.error(a.data.msg), i.showLoading = !1, i.$apply(), !(t.length > 0)) {
                  e.next = 13;
                  break
                }
                return s = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, n = s.openid, e.next = 12, _api2.default.addSearchKeyword({
                  query: {
                    openId: n,
                    keyword: t
                  }
                });
              case 12:
                u = e.sent;
              case 13:
              case "end":
                return e.stop()
            }
          }, e, this)
        }));
        return e
      }()
    }, {
      key: "clearUserKeywords",
      value: function() {
        function e() {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
          var t, r, o;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, r = t.openid, e.next = 4, _api2.default.clearSearchKeyword({
                  query: {
                    openId: r
                  }
                });
              case 4:
                o = e.sent, 0 == o.data.code ? this.keywordhisList = [] : _tip2.default.error(o.data.msg), this.$apply();
              case 7:
              case "end":
                return e.stop()
            }
          }, e, this)
        }));
        return e
      }()
    }, {
      key: "onReachBottom",
      value: function() {
        var e = this;
        if (e.showLoading = !0, console.log(e.page_total + "===" + e.currentPage), e.page_total > e.currentPage) {
          if (e.preventRepeatReuqest) return !0;
          e.preventRepeatReuqest = !0, e.currentPage++, e.doSearchGoods("", e.currentPage), e.preventRepeatReuqest = !1
        } else e.showLoading = !1
      }
    }]), t
  }(_wepy2.default.page);
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Search, "pages/search"));