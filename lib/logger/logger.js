'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function logger(callback) {
    return function () { return function (app, next, handler) {
        callback(app, handler);
        return next();
    }; };
}

exports.logger = logger;
