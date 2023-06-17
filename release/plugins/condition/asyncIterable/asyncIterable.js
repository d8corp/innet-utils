'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
require('../../../utils/index.js');
var createConditionPlugin = require('../../../utils/createConditionPlugin/createConditionPlugin.js');

const asyncIterable = createConditionPlugin.createConditionPlugin(() => {
    const app = innet.useApp();
    return typeof app === 'object' && Symbol.asyncIterator in app;
});

exports.asyncIterable = asyncIterable;
