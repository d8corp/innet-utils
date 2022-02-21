import { Plugin } from 'innet'

export type LoggerCallback = (app, handler) => any

export function logger (callback: LoggerCallback): Plugin {
  return () => (app, next, handler) => {
    callback(app, handler)
    return next()
  }
}
