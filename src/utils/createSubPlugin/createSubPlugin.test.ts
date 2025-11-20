import innet, { createHandler, NEXT, type Plugin, runPlugins, useApp, useHandler } from 'innet'
import { type HandlerPlugin } from 'innet/types'

import { createSubPlugin } from '.'

function createLogger () {
  const log = jest.fn()
  const plugin: Plugin = () => () => {
    log(useApp())
    return NEXT
  }

  return [log, plugin]
}

describe('createSubPlugins', () => {
  test('exist', () => {
    const [log, logger] = createLogger()

    const exist = createSubPlugin(
      plugins => {
        const app = useApp()

        if (app === null || app === undefined) return NEXT

        runPlugins(app, useHandler(), plugins)
      },
    )

    const handler = createHandler([
      exist([
        logger,
      ]),
    ])

    expect(log).not.toBeCalled()

    innet(null, handler)
    innet(undefined, handler)

    expect(log).not.toBeCalled()

    innet(true, handler)
    expect(log).toBeCalledWith(true)

    innet(false, handler)
    expect(log).toBeCalledWith(false)
  })
  test('extends', () => {
    const log = []

    const logger1 = (): HandlerPlugin => () => {
      log.push(`logger 1: ${String(useApp())}`)
      return NEXT
    }

    const logger2 = (): HandlerPlugin => () => {
      log.push(`logger 2: ${String(useApp())}`)
      return NEXT
    }

    const exist = createSubPlugin(
      plugins => {
        const app = useApp()

        if (app === null || app === undefined) return NEXT

        runPlugins(app, useHandler(), plugins)
      },
    )

    const handler1 = createHandler([
      exist([
        logger1,
      ]),
    ])

    const handler2 = createHandler([
      exist([
        logger2,
      ]),
    ], handler1)

    expect(log).toEqual([])

    innet(null, handler2)
    innet(undefined, handler2)

    expect(log).toEqual([])

    innet(true, handler2)
    expect(log).toEqual(['logger 2: true', 'logger 1: true'])

    innet(false, handler2)
    expect(log).toEqual(['logger 2: true', 'logger 1: true', 'logger 2: false', 'logger 1: false'])
  })
})
