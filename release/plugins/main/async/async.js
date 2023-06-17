'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

function async() {
    return () => {
        const app = innet.useApp();
        if (!(app instanceof Promise))
            return innet.NEXT;
        const handler = innet.useHandler();
        app.then(data => innet__default["default"](data, handler));
    };
}

exports.async = async;
