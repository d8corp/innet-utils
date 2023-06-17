'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
require('../../../utils/index.js');
var createConditionPlugin = require('../../../utils/createConditionPlugin/createConditionPlugin.js');

const node = createConditionPlugin.createConditionPlugin(() => innet.useApp() instanceof Node);

exports.node = node;
