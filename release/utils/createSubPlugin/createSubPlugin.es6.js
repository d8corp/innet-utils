import { activatePlugins } from 'innet';

function createSubPlugin(plugin, key = Symbol('createSubPlugin key')) {
    return plugins => handler => {
        const result = key in handler ? undefined : () => plugin(handler[key]);
        if (!(key in handler)) {
            handler[key] = [];
        }
        activatePlugins(plugins, handler[key], handler);
        return result;
    };
}

export { createSubPlugin };
