'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
require('../../../utils/index.js');
var createConditionPlugin = require('../../../utils/createConditionPlugin/createConditionPlugin.js');

const promise = createConditionPlugin.createConditionPlugin(() => innet.useApp() instanceof Promise);

exports.promise = promise;
