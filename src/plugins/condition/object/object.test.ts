import innet, { createHandler } from 'innet'

import { createLogger } from '../../../testUtils'
import { object } from '.'

describe('object', () => {
  it('runs for any object', () => {
    const [log, logger] = createLogger()
    const handler = createHandler([
      object([logger]),
    ])

    innet(undefined, handler)
    innet('null', handler)
    innet(1, handler)
    innet(Symbol(''), handler)

    expect(log).toBeCalledTimes(0)

    innet({}, handler)
    innet([], handler)
    innet(null, handler)
    innet(new Set(), handler)
    expect(log).toBeCalledTimes(4)
  })
})
