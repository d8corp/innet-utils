import innet, { createHandler } from 'innet'

import { logger } from '../logger'
import { asyncIterable } from './asyncIterable'

describe('asyncIterable', () => {
  it('works', () => {
    const log = jest.fn()
    const handler = createHandler([
      asyncIterable([
        logger(log),
      ]),
    ])

    innet([1, 2, 3], handler)
    innet(new Set([1, 2, 3]), handler)

    expect(log).toBeCalledTimes(0)

    async function * testFn () {}

    innet(testFn(), handler)

    expect(log).toBeCalledTimes(1)
  })
})
