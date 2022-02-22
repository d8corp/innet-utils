'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

function arraySync() {
    return function (app, next, handler) { return next(app.map(function (a) { return innet__default["default"](a, handler); })); };
}

exports.arraySync = arraySync;
