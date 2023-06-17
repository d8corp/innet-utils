'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
require('../../../utils/index.js');
var createConditionPlugin = require('../../../utils/createConditionPlugin/createConditionPlugin.js');

const iterable = createConditionPlugin.createConditionPlugin(() => {
    const app = innet.useApp();
    return typeof app === 'object' && Symbol.iterator in app;
});

exports.iterable = iterable;
