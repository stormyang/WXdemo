"use strict";

function getCurrentTime() {
  var t = new Date,
    r = t.getFullYear(),
    e = t.getMonth() + 1;
  e = e < 10 ? "0" + e : e;
  var n = t.getDate() < 10 ? "0" + t.getDate() : t.getDate(),
    a = t.getHours() < 10 ? "0" + t.getHours() : t.getHours(),
    i = t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes(),
    o = t.getSeconds() < 10 ? "0" + t.getSeconds() : t.getSeconds();
  Math.round(899 * Math.random() + 100);
  return r + "" + e + n + a + i + o
}

function objLength(t) {
  var r = toString(t),
    e = 0;
  if ("[object Object]" != r);
  else
    for (var n in t) "number" != n && e++;
  return e
}

function vailPhone(t) {
  var r = !1,
    e = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
  return r = 11 != t.length ? r : !!e.test(t) || r
}

function ifSpanish(t) {
  var r = !1,
    e = /^([6|7|9]{1}(\d+){8})$/;
  return r = 9 != t.length ? r : !!e.test(t) || r
}

function div(t, r) {
  var e, n, a = 0,
    i = 0;
  try {
    a = t.toString().split(".")[1].length
  } catch (t) {}
  try {
    i = r.toString().split(".")[1].length
  } catch (t) {}
  return e = Number(t.toString().replace(".", "")), n = Number(r.toString().replace(".", "")), mul(e / n, Math.pow(10, i - a))
}

function accAdd(t, r) {
  var e, n, a;
  try {
    e = t.toString().split(".")[1].length
  } catch (t) {
    e = 0
  }
  try {
    n = r.toString().split(".")[1].length
  } catch (t) {
    n = 0
  }
  return a = Math.pow(10, Math.max(e, n)), ((t * a + r * a) / a).toFixed(2)
}

function mul(t, r) {
  var e = 0,
    n = t.toString(),
    a = r.toString();
  try {
    e += n.split(".")[1].length
  } catch (t) {}
  try {
    e += a.split(".")[1].length
  } catch (t) {}
  return Number(n.replace(".", "")) * Number(a.replace(".", "")) / Math.pow(10, e)
}

function displayProp(t) {
  var r = "";
  for (var e in t) r += e + t[e];
  return r
}

function sTrim(t) {
  return t.replace(/\s/gi, "")
}

function replaceMaohao(t) {
  return t.replace(/\:/gi, "")
}

function convertStarArray(t) {
  for (var r = [], e = 1; e <= 5; e++) t >= e ? r.push(1) : t > e - 1 && t < e + 1 ? r.push(2) : r.push(0);
  return r
}
module.exports = {
  getCurrentTime: getCurrentTime,
  objLength: objLength,
  displayProp: displayProp,
  sTrim: sTrim,
  replaceMaohao: replaceMaohao,
  vailPhone: vailPhone,
  ifSpanish: ifSpanish,
  div: div,
  mul: mul,
  accAdd: accAdd,
  convertStarArray: convertStarArray
};