'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
require('../../plugins/index.js');
var call = require('../../plugins/main/call/call.js');

const callHandler = innet.createHandler([call.call]);

exports.callHandler = callHandler;
