import innet, { createHandler, NEXT, type Plugin, useApp, useHandler } from 'innet'

import { createLogger } from '../../../testUtils'
import { async } from '.'

describe('async', () => {
  it('works', async () => {
    const [log, logger] = createLogger()
    const sum: Plugin = () => () => {
      const app = useApp()

      if (!Array.isArray(app)) return NEXT

      innet(app[0] + app[1], useHandler())
    }

    const app1 = [13, 42]
    const app2 = new Promise(resolve => resolve([7, 13]))

    const handler = createHandler([
      async,
      sum,
      logger,
    ])

    innet(app1, handler)

    expect(log).toBeCalledTimes(1)
    expect(log).toBeCalledWith(55)

    innet(app2, handler)

    await app2

    expect(log).toBeCalledTimes(2)
    expect(log).toBeCalledWith(20)
  })
})
