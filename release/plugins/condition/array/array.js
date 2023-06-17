'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
require('../../../utils/index.js');
var createConditionPlugin = require('../../../utils/createConditionPlugin/createConditionPlugin.js');

const array = createConditionPlugin.createConditionPlugin(() => Array.isArray(innet.useApp()));

exports.array = array;
