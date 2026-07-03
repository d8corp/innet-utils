import { createHandler, innet, NEXT } from 'innet'

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
  it('runs for any object with extends', () => {
    const log: any[] = []

    const handler1 = createHandler([
      object([() => () => {
        log.push('A')
        return NEXT
      }]),
    ])

    const handler2 = createHandler([
      object([() => () => {
        log.push('B')
        return NEXT
      }]),
    ], handler1)

    innet({}, handler2)

    expect(log).toEqual(['B', 'A'])
  })
})
