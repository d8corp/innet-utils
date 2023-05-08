import innet, { type HandlerPlugin, NEXT, useApp, useHandler } from 'innet'

export function arraySync (): HandlerPlugin {
  return () => {
    const app = useApp()

    if (!Array.isArray(app)) return NEXT

    const handler = useHandler()

    for (let i = 0; i < app.length; i++) {
      innet(app[i], handler)
    }
  }
}
