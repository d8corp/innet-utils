import innet, { createHandler, NEXT, type Plugin, runPlugins, useApp, useHandler } from 'innet'

import { createSubPlugin } from '.'

function createLogger () {
  const log = jest.fn()
  const plugin: Plugin = () => () => {
    log(useApp())
  }

  return [log, plugin]
}

describe('createSubPlugins', () => {
  test('exist', () => {
    const [log, logger] = createLogger()

    const exist = createSubPlugin(
      plugins => {
        const app = useApp()

        return app === null || app === undefined
          ? NEXT
          : runPlugins(app, useHandler(), plugins)
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
})
