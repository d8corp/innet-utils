import { type HandlerPlugin, innet, NEXT, useApp, useHandler } from 'innet'

export function async (): HandlerPlugin {
  return () => {
    const app = useApp()

    if (!(app instanceof Promise)) return NEXT

    const handler = useHandler()

    app.then(data => innet(data, handler))
  }
}
