'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');

function createSubPlugin(plugin, key = Symbol('createSubPlugin key')) {
    return plugins => handler => {
        const result = key in handler ? undefined : () => plugin(handler[key]);
        if (!(key in handler)) {
            handler[key] = [];
        }
        innet.activatePlugins(plugins, handler[key], handler);
        return result;
    };
}

exports.createSubPlugin = createSubPlugin;
