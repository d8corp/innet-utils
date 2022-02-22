'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

function arrayAsync() {
    return function (app, next, handler) {
        var newApp = [];
        function run(i) {
            if (i < app.length) {
                var result = innet__default["default"](app[i], handler);
                if (result instanceof Promise) {
                    return result.then(function (val) {
                        newApp[i] = val;
                        return run(i + 1);
                    });
                }
                else {
                    newApp[i] = result;
                    return run(i + 1);
                }
            }
            else {
                return next(newApp);
            }
        }
        return run(0);
    };
}

exports.arrayAsync = arrayAsync;
