import innet, { createHandler } from 'innet'

import { createLogger } from '../../testUtils'
import { array } from '.'

describe('array', () => {
  it('runs only array', () => {
    const [log, logger] = createLogger()

    const handler = createHandler([
      array([
        logger,
      ]),
    ])

    innet(undefined, handler)
    innet(null, handler)
    innet('null', handler)
    innet(1, handler)
    innet({}, handler)
    innet(new Set(), handler)
    innet(Symbol(''), handler)

    expect(log).toBeCalledTimes(0)

    innet([], handler)

    expect(log).toBeCalledTimes(1)
  })
})
