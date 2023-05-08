import innet, { createHandler } from 'innet'

import { promise } from '..'
import { createLogger } from '../testUtils'

describe('promise', () => {
  it('runs for only promise', () => {
    const [log, logger] = createLogger()
    const handler = createHandler([
      promise([logger]),
    ])

    innet(undefined, handler)
    innet([], handler)
    innet(1, handler)
    innet({}, handler)
    innet(new Set(), handler)
    innet(Symbol(''), handler)
    innet(null, handler)
    innet('null', handler)

    expect(log).toBeCalledTimes(0)

    innet(new Promise(resolve => resolve(undefined)), handler)
    expect(log).toBeCalledTimes(1)
  })
})
