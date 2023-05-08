import { type Plugin, useApp } from 'innet'

export function createLogger () {
  const log = jest.fn()
  const plugin: Plugin = () => () => {
    log(useApp())
  }

  return [log, plugin]
}
