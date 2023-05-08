import { type HandlerPlugin } from 'innet'

export function stop (): HandlerPlugin {
  return () => {}
}
