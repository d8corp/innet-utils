'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');

const call = () => () => {
    innet.useApp()();
};

exports.call = call;
