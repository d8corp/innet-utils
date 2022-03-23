'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createConditionPlugin = require('../createConditionPlugin/createConditionPlugin.js');

var string = createConditionPlugin.createConditionPlugin(function (app) { return typeof app === 'string'; });

exports.string = string;
