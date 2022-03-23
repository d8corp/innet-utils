'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createConditionPlugin = require('../createConditionPlugin/createConditionPlugin.js');

var fn = createConditionPlugin.createConditionPlugin(function (app) { return typeof app === 'function'; });

exports.fn = fn;
