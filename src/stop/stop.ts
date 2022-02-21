import { PluginHandler } from 'innet'

export function stop (): PluginHandler {
  return app => app
}
