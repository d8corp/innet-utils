'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createConditionPlugin = require('../createConditionPlugin/createConditionPlugin.js');

var number = createConditionPlugin.createConditionPlugin(function (app) { return typeof app === 'number'; });

exports.number = number;
