'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var createSubPlugin = require('../createSubPlugin/createSubPlugin.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

function createConditionPlugin(condition, key) {
    return createSubPlugin.createSubPlugin(function (app, next, handler, plugins) { return (condition(app) ? innet__default["default"](app, handler, plugins) : next()); }, key);
}

exports.createConditionPlugin = createConditionPlugin;
