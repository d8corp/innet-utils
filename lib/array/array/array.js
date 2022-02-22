'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createConditionPlugin = require('../../createConditionPlugin/createConditionPlugin.js');

var array = createConditionPlugin.createConditionPlugin(function (app) { return Array.isArray(app); });

exports.array = array;
