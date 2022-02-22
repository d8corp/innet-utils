'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createConditionPlugin = require('../createConditionPlugin/createConditionPlugin.js');

var nullish = createConditionPlugin.createConditionPlugin(function (app) { return app === null; });

exports.nullish = nullish;
