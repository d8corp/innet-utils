import innet, { createHandler } from 'innet'

import { createLogger } from '../testUtils'
import { string } from '.'

describe('string', () => {
  it('runs for only string', () => {
    const [log, logger] = createLogger()
    const handler = createHandler([
      string([logger]),
    ])

    innet(undefined, handler)
    innet([], handler)
    innet(1, handler)
    innet({}, handler)
    innet(new Set(), handler)
    innet(Symbol(''), handler)
    innet(null, handler)

    expect(log).toBeCalledTimes(0)

    innet('null', handler)
    expect(log).toBeCalledTimes(1)
  })
})
