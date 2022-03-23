'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createConditionPlugin = require('../createConditionPlugin/createConditionPlugin.js');

var node = createConditionPlugin.createConditionPlugin(function (app) { return app instanceof Node; });

exports.node = node;
