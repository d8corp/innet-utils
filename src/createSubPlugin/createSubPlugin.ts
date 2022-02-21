import { Handler, Next, Plugin, PluginHandler } from 'innet'

export interface SubPlugin {
  (plugins: Plugin[]): Plugin
}

export interface SubPluginHandler {
  (app, next: Next, handler: Handler, plugins: PluginHandler[]): any
}

export function createSubPlugin (plugin: SubPluginHandler, key = Symbol('createTypePlugin key') as unknown as string): SubPlugin {
  return (plugins) => handler => {
    const pluginHandlers = plugins.map(plugin => plugin(handler))

    if (key in handler) {
      handler[key] = handler[key].concat(pluginHandlers)
    } else {
      handler[key] = pluginHandlers
    }

    return (app, next, handler) => plugin(app, next, handler, handler[key])
  }
}
