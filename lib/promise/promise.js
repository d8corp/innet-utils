'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createConditionPlugin = require('../createConditionPlugin/createConditionPlugin.js');

var promise = createConditionPlugin.createConditionPlugin(function (app) { return app instanceof Promise; });

exports.promise = promise;
