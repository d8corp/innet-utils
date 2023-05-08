import innet, { createHandler } from 'innet'

import { createLogger } from '../testUtils'
import { fn } from '.'

describe('fn', () => {
  it('runs for only function', () => {
    const [log, logger] = createLogger()
    const handler = createHandler([
      fn([logger]),
    ])

    innet(undefined, handler)
    innet([], handler)
    innet(1, handler)
    innet({}, handler)
    innet(new Set(), handler)
    innet(Symbol(''), handler)
    innet(null, handler)
    innet('null', handler)
    innet(new Promise(resolve => resolve(undefined)), handler)

    expect(log).toBeCalledTimes(0)

    innet(() => {}, handler)
    expect(log).toBeCalledTimes(1)

    innet(function () {}, handler)
    expect(log).toBeCalledTimes(2)
  })
})
