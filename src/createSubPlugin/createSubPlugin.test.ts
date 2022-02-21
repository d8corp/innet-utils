import innet, { createHandler, PluginHandler } from 'innet'

import { createSubPlugin } from '.'

describe('createSubPlugins', () => {
  test('exist', () => {
    const log = jest.fn()

    function logger (): PluginHandler {
      return (app, next) => {
        log(app)
        return next()
      }
    }

    const exist = createSubPlugin(
      (app = null, next, handler, plugins) => app === null
        ? next()
        : innet(app, handler, plugins),
    )

    const handler = createHandler([exist([logger])])

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
