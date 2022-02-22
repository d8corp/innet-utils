function createSubPlugin(plugin, key = Symbol('createTypePlugin key')) {
    return (plugins) => handler => {
        const pluginHandlers = plugins.map(plugin => plugin(handler));
        if (key in handler) {
            handler[key] = handler[key].concat(pluginHandlers);
        }
        else {
            handler[key] = pluginHandlers;
        }
        return (app, next, handler) => plugin(app, next, handler, handler[key]);
    };
}

export { createSubPlugin };
