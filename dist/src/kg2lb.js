"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var kg = 0.45359237;
var lb = 2.20462;

var convertToKg = exports.convertToKg = function convertToKg(libra) {
  return parseFloat((libra * kg).toFixed(4));
};
var convertToLb = exports.convertToLb = function convertToLb(kilos) {
  return parseFloat((kilos * lb).toFixed(4));
};

convertToKg(25); //11.3398
convertToLb(47); //103.6171