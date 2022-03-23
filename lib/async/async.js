'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

function async() {
    return function (app, next, handler) { return app.then(function (data) { return innet__default["default"](data, handler); }); };
}

exports.async = async;
