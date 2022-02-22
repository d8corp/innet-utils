'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function arraySingleLess() {
    return function (app, next) { return app.length === 1 ? app[0] : app.length ? next(app) : undefined; };
}

exports.arraySingleLess = arraySingleLess;
