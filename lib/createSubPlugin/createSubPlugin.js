'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function createSubPlugin(plugin, key) {
    if (key === void 0) { key = Symbol('createTypePlugin key'); }
    return function (plugins) { return function (handler) {
        var pluginHandlers = plugins.map(function (plugin) { return plugin(handler); });
        if (key in handler) {
            handler[key] = handler[key].concat(pluginHandlers);
        }
        else {
            handler[key] = pluginHandlers;
        }
        return function (app, next, handler) { return plugin(app, next, handler, handler[key]); };
    }; };
}

exports.createSubPlugin = createSubPlugin;
