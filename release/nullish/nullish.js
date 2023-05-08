'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
require('../createConditionPlugin/index.js');
var createConditionPlugin = require('../createConditionPlugin/createConditionPlugin.js');

var nullish = createConditionPlugin.createConditionPlugin(function () { return innet.useApp() === null; });

exports.nullish = nullish;
