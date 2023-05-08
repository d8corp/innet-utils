import innet, { createHandler } from 'innet'

import { createLogger } from '../testUtils'
import { iterable } from '.'

describe('iterable', () => {
  it('works', () => {
    const [log, logger] = createLogger()
    const handler = createHandler([
      iterable([
        logger,
      ]),
    ])

    innet([1, 2, 3], handler)
    innet(new Set([1, 2, 3]), handler)

    expect(log).toBeCalledTimes(2)

    innet({}, handler)

    expect(log).toBeCalledTimes(2)
  })
})
