"use strict";
var _wxRequest = require("./../utils/wxRequest.js"),
  env = "-test",
  apiBase = "https://app.h5huodong.com",
  getDiscoverList = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "????")
  },
  wxJsCode2Session = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/wechat/jscode2session")
  },
  user2session = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/wechat/user2session?jsoncallback=?")
  },
  getHomeDisvocerList = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/topicsList.do")
  },
  getHomeTopicStickList = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/topicStickList.do")
  },
  hostGoodsList = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/topicGoodsList.do")
  },
  getGoodsList = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/searchGoodsList.do")
  },
  getTopicGoodsInfo = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/topicGoodsListInfo.do")
  },
  goodsDetail = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/goods.do")
  },
  getGoodsEvaluate = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/evaluate/getEvaluateInfo.do")
  },
  saveGoodsEvaluate = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/evaluate/saveEvaluate.do")
  },
  getCommentList = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/evaluate/getCommentList.do")
  },
  rootCtegoryList = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/rootCtegoryList.do")
  },
  childGoodsCatetoryList = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/childCatetoryList.do")
  },
  getAdList = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/advertsList.do")
  },
  addCart = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/goodsCart/add.do")
  },
  cartList = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/goodsCart/list.do")
  },
  cartCheck = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/goodsCart/check.do")
  },
  cartCheckAll = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/goodsCart/checkAll.do")
  },
  cartDel = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/goodsCart/delete.do")
  },
  cartUpdateNum = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/goodsCart/updateNum.do")
  },
  preOrder = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/goodsCart/commitData.do")
  },
  getUserAddress = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/address/list.do")
  },
  saveAddress = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/address/save.do")
  },
  receiverInfoById = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/address/getByid.do")
  },
  delUserAddress = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop//address/option.do")
  },
  saveByCart = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/order/saveByCart.do")
  },
  getMyOrderList = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/order/getMyOrderList.do")
  },
  getMyOrderSize = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/order/getMyOrderSize.do")
  },
  getOrderInfo = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/order/getOrderDetail.do")
  },
  getPayOrderDetail = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/order/getPayOrderDetail.do")
  },
  editOrderInfo = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/order/opt.do")
  },
  orderExpressInfo = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/orderExpress/orderExpressInfo.do")
  },
  goodsUserOrderList = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/order/getUserGoodsOrderList")
  },
  getDeliveryInfo = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/order/getDeliveryInfo.do")
  },
  toPay = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/wepay/toPay.do")
  },
  goodsFavorite = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/favorite/add")
  },
  goodsUnFavorite = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/favorite/delete")
  },
  goodsIsFavorite = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/favorite/goodsIsFavorite")
  },
  favoriteInfo = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/favorite/favoriteInfo")
  },
  userSginInfo = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/sign/signInfo.do")
  },
  doSign = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/sign/doSign.do")
  },
  getSignDate = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/sign/getSignDate.do")
  },
  pointInfo = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/sign/pointInfo.do")
  },
  browseInfo = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/browse/browseInfo")
  },
  addBrowser = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/browse/add")
  },
  delUserBrowser = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/browse/delete")
  },
  messageInfo = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/systemMessage/messageInfo")
  },
  registerUser = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/user/register")
  },
  sendRandCode = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/user/send")
  },
  getUserInfo = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/user/getUserInfo")
  },
  addSearchKeyword = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/search/add")
  },
  searchKeywordList = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/search/list")
  },
  clearSearchKeyword = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/eshop/search/clear")
  },
  refundApply = function(e) {
    return (0, _wxRequest.wxRequest)(e, apiBase + "/api/mall/refund/saveRefundApply")
  };
module.exports = {
  hostGoodsList: hostGoodsList,
  getDiscoverList: getDiscoverList,
  getHomeDisvocerList: getHomeDisvocerList,
  getGoodsList: getGoodsList,
  goodsDetail: goodsDetail,
  wxJsCode2Session: wxJsCode2Session,
  user2session: user2session,
  userSginInfo: userSginInfo,
  doSign: doSign,
  addCart: addCart,
  cartList: cartList,
  cartCheck: cartCheck,
  cartCheckAll: cartCheckAll,
  cartDel: cartDel,
  cartUpdateNum: cartUpdateNum,
  preOrder: preOrder,
  refundApply: refundApply,
  pointInfo: pointInfo,
  browseInfo: browseInfo,
  addBrowser: addBrowser,
  delUserBrowser: delUserBrowser,
  favoriteInfo: favoriteInfo,
  messageInfo: messageInfo,
  registerUser: registerUser,
  sendRandCode: sendRandCode,
  getUserInfo: getUserInfo,
  getUserAddress: getUserAddress,
  saveAddress: saveAddress,
  receiverInfoById: receiverInfoById,
  addSearchKeyword: addSearchKeyword,
  searchKeywordList: searchKeywordList,
  clearSearchKeyword: clearSearchKeyword,
  getMyOrderList: getMyOrderList,
  saveByCart: saveByCart,
  toPay: toPay,
  rootCtegoryList: rootCtegoryList,
  childGoodsCatetoryList: childGoodsCatetoryList,
  getOrderInfo: getOrderInfo,
  editOrderInfo: editOrderInfo,
  goodsUserOrderList: goodsUserOrderList,
  orderExpressInfo: orderExpressInfo,
  delUserAddress: delUserAddress,
  goodsFavorite: goodsFavorite,
  goodsUnFavorite: goodsUnFavorite,
  goodsIsFavorite: goodsIsFavorite,
  getMyOrderSize: getMyOrderSize,
  getPayOrderDetail: getPayOrderDetail,
  getAdList: getAdList,
  getSignDate: getSignDate,
  getGoodsEvaluate: getGoodsEvaluate,
  saveGoodsEvaluate: saveGoodsEvaluate,
  getCommentList: getCommentList,
  getTopicGoodsInfo: getTopicGoodsInfo,
  getDeliveryInfo: getDeliveryInfo,
  getHomeTopicStickList: getHomeTopicStickList
};