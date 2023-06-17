import { activatePlugins } from 'innet';

function createSubPlugin(plugin, key = Symbol('createSubPlugin key')) {
    return plugins => handler => {
        const handlerPlugins = [];
        activatePlugins(plugins, handlerPlugins, handler);
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

export { createSubPlugin };
