'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
require('../createConditionPlugin/index.js');
var createConditionPlugin = require('../createConditionPlugin/createConditionPlugin.js');

var promise = createConditionPlugin.createConditionPlugin(function () { return innet.useApp() instanceof Promise; });

exports.promise = promise;
