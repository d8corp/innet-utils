'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createConditionPlugin = require('../createConditionPlugin/createConditionPlugin.js');

var object = createConditionPlugin.createConditionPlugin(function (app) { return typeof app === 'object'; });

exports.object = object;
