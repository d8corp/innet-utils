'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');

function arraySync() {
    return () => {
        const app = innet.useApp();
        if (!Array.isArray(app))
            return innet.NEXT;
        const handler = innet.useHandler();
        for (let i = 0; i < app.length; i++) {
            innet.innet(app[i], handler);
        }
    };
}

exports.arraySync = arraySync;
