'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

function arraySync() {
    return () => {
        const app = innet.useApp();
        if (!Array.isArray(app))
            return innet.NEXT;
        const handler = innet.useHandler();
        for (let i = 0; i < app.length; i++) {
            innet__default["default"](app[i], handler);
        }
    };
}

exports.arraySync = arraySync;
