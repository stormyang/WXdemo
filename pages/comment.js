"use strict";

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}

function _toConsumableArray(e) {
  if (Array.isArray(e)) {
    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
    return n
  }
  return Array.from(e)
}

function _asyncToGenerator(e) {
  return function() {
    var t = e.apply(this, arguments);
    return new Promise(function(e, n) {
      function r(o, a) {
        try {
          var i = t[o](a),
            s = i.value
        } catch (e) {
          return void n(e)
        }
        if (!i.done) return Promise.resolve(s).then(function(e) {
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
  _comment_list = require("./../components/comment_list.js"),
  _comment_list2 = _interopRequireDefault(_comment_list),
  _api = require("./../api/api.js"),
  _api2 = _interopRequireDefault(_api),
  _tip = require("./../utils/tip.js"),
  _tip2 = _interopRequireDefault(_tip),
  goodsComment = function(e) {
    function t() {
      var e, n, r, o;
      _classCallCheck(this, t);
      for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) i[s] = arguments[s];
      return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), r.config = {
        navigationBarTitleText: "商品评论"
      }, r.data = {
        commentList: [],
        commentCount: 0,
        goodsId: "",
        priceId: "",
        is_empty: !1,
        currentPage: 1,
        page_total: 0,
        showLoading: !1
      }, r.$repeat = {}, r.$props = {
        commentList: {
          "xmlns:v-bind": "",
          "v-bind:list.sync": "commentList"
        }
      }, r.$events = {}, r.components = {
        commentList: _comment_list2.default
      }, r.computed = {}, r.methods = {}, r.events = {}, o = n, _possibleConstructorReturn(r, o)
    }
    return _inherits(t, e), _createClass(t, [{
      key: "onLoad",
      value: function(e) {
        this.goodsId = e.goodsId, this.priceId = e.priceId, this.$apply(), this.getCommentList(), wx.hideShareMenu()
      }
    }, {
      key: "getCommentList",
      value: function() {
        function e(e, n) {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, n) {
          var r, o;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = this, e.next = 3, _api2.default.getCommentList({
                  query: {
                    page: t || 1,
                    size: n || 10,
                    goodsId: r.goodsId,
                    priceId: r.priceId
                  }
                });
              case 3:
                o = e.sent, 0 == o.data.code ? (r.commentList = [].concat(_toConsumableArray(r.commentList), _toConsumableArray(o.data.commentList)), r.commentCount = o.data.commentCount, r.page_total = o.data.page_total, 0 == o.data.page_total && (r.is_empty = !0)) : _tip2.default.error(o.data.msg), r.showLoading = !1, r.$apply();
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
          e.preventRepeatReuqest = !0, e.currentPage++, e.getCommentList(e.currentPage), e.preventRepeatReuqest = !1
        } else e.showLoading = !1;
        e.$apply()
      }
    }]), t
  }(_wepy2.default.page);
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(goodsComment, "pages/comment"));