import innet, { createHandler } from 'innet'

import { createLogger } from '../../../testUtils'
import { node } from '.'

describe('node', () => {
  it('runs for only node', () => {
    const [log, logger] = createLogger()
    const handler = createHandler([
      node([
        logger,
      ]),
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
    innet(() => {}, handler)

    expect(log).toBeCalledTimes(0)

    innet(document.createElement('div'), handler)
    expect(log).toBeCalledTimes(1)
  })
})
