import {
  activatePlugins,
  type HandlerPlugin,
  type Plugin,
} from 'innet'

export interface SubPlugin {
  (plugins: Plugin[]): Plugin
}

export interface HandlerSubPlugin {
  (plugins: HandlerPlugin[]): void
}

export function createSubPlugin (plugin: HandlerSubPlugin, key = Symbol('createSubPlugin key')): SubPlugin {
  return plugins => handler => {
    const result = key in handler ? undefined : () => plugin(handler[key])

    if (!(key in handler)) {
      handler[key] = []
    }

    activatePlugins(plugins, handler[key], handler)

    return result
  }
}
