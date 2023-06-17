'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
require('../../../utils/index.js');
var createConditionPlugin = require('../../../utils/createConditionPlugin/createConditionPlugin.js');

const fn = createConditionPlugin.createConditionPlugin(() => typeof innet.useApp() === 'function');

exports.fn = fn;
