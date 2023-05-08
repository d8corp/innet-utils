'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');

function createSubPlugin(plugin, key) {
    if (key === void 0) { key = Symbol('createSubPlugin key'); }
    return function (plugins) { return function (handler) {
        var handlerPlugins = [];
        innet.activatePlugins(plugins, handlerPlugins, handler);
        if (key in handler) {
            handler[key] = handler[key].concat(handlerPlugins);
        }
        else {
            handler[key] = handlerPlugins;
        }
        return function () {
            return plugin(handler[key]);
        };
    }; };
}

exports.createSubPlugin = createSubPlugin;
