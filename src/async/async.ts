import innet, { PluginHandler } from 'innet'

export function async (): PluginHandler {
  return (app, next, handler) => app.then(data => innet(data, handler))
}
