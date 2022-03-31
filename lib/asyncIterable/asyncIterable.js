'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createConditionPlugin = require('../createConditionPlugin/createConditionPlugin.js');

var asyncIterable = createConditionPlugin.createConditionPlugin(function (app) { return Symbol.asyncIterator in app; });

exports.asyncIterable = asyncIterable;
