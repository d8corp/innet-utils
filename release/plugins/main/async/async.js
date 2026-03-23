'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');

function async() {
    return () => {
        const app = innet.useApp();
        if (!(app instanceof Promise))
            return innet.NEXT;
        const handler = innet.useHandler();
        app.then(data => innet.innet(data, handler));
    };
}

exports.async = async;
