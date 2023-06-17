import { NEXT, type Plugin } from 'innet'

export type LoggerCallback = () => void

export function logger (callback: LoggerCallback): Plugin {
  return () => () => {
    callback()
    return NEXT
  }
}
