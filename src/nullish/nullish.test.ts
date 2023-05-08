import innet, { createHandler } from 'innet'

import { createLogger } from '../testUtils'
import { nullish } from '.'

describe('null', () => {
  it('runs for only null', () => {
    const [log, logger] = createLogger()
    const handler = createHandler([
      nullish([logger]),
    ])

    innet(undefined, handler)
    innet([], handler)
    innet('null', handler)
    innet(1, handler)
    innet({}, handler)
    innet(new Set(), handler)
    innet(Symbol(''), handler)

    expect(log).toBeCalledTimes(0)

    innet(null, handler)
    expect(log).toBeCalledTimes(1)
  })
})
