import innet, { PluginHandler } from 'innet'

export function async (): PluginHandler {
  return (app, next, handler) => {
    if (app instanceof Promise) {
      return app.then(data => innet(data, handler))
    }

    return next()
  }
}
