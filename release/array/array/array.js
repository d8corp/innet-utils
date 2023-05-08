'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
require('../../createConditionPlugin/index.js');
var createConditionPlugin = require('../../createConditionPlugin/createConditionPlugin.js');

var array = createConditionPlugin.createConditionPlugin(function () { return Array.isArray(innet.useApp()); });

exports.array = array;
