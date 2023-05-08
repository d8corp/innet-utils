'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
require('../createConditionPlugin/index.js');
var createConditionPlugin = require('../createConditionPlugin/createConditionPlugin.js');

var object = createConditionPlugin.createConditionPlugin(function () { return typeof innet.useApp() === 'object'; });

exports.object = object;
