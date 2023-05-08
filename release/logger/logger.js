'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');

function logger(callback) {
    return function () { return function () {
        callback();
        return innet.NEXT;
    }; };
}

exports.logger = logger;
