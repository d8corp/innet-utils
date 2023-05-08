'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
require('../createConditionPlugin/index.js');
var createConditionPlugin = require('../createConditionPlugin/createConditionPlugin.js');

var iterable = createConditionPlugin.createConditionPlugin(function () {
    var app = innet.useApp();
    return typeof app === 'object' && Symbol.iterator in app;
});

exports.iterable = iterable;
