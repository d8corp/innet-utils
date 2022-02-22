'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function arrayClear() {
    return function (app, next) {
        var result = [];
        for (var i = 0; i < app.length; i++) {
            if (app[i] !== undefined) {
                result.push(app[i]);
            }
        }
        return next(result);
    };
}

exports.arrayClear = arrayClear;
