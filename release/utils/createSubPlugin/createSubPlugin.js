'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');

function createSubPlugin(plugin, key = Symbol('createSubPlugin key')) {
    return plugins => handler => {
        const handlerPlugins = [];
        innet.activatePlugins(plugins, handlerPlugins, handler);
        if (key in handler) {
            handler[key] = handler[key].concat(handlerPlugins);
        }
        else {
            handler[key] = handlerPlugins;
        }
        return () => {
            return plugin(handler[key]);
        };
    };
}

exports.createSubPlugin = createSubPlugin;
