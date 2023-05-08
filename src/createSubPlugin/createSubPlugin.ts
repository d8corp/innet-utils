import {
  activatePlugins,
  type HandlerPlugin,
  type Plugin,
  runPlugins,
  useApp,
  useHandler,
} from 'innet'

export interface SubPlugin {
  (plugins: Plugin[]): Plugin
}

export interface HandlerSubPlugin {
  (plugins: HandlerPlugin[]): void
}

export function createSubPlugin (plugin: HandlerSubPlugin, key = Symbol('createSubPlugin key')): SubPlugin {
  return plugins => handler => {
    const handlerPlugins: HandlerPlugin[] = []

    activatePlugins(plugins, handlerPlugins, handler)

    if (key in handler) {
      handler[key] = handler[key].concat(handlerPlugins)
    } else {
      handler[key] = handlerPlugins
    }

    return () => {
      plugin(handler[key])
    }
  }
}
