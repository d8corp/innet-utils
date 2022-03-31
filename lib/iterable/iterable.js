'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createConditionPlugin = require('../createConditionPlugin/createConditionPlugin.js');

var iterable = createConditionPlugin.createConditionPlugin(function (app) { return Symbol.iterator in app; });

exports.iterable = iterable;
