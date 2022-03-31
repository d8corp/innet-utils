import innet, { createHandler } from 'innet'

import { iterable, logger, object } from '..'

describe('iterable', () => {
  it('works', () => {
    const log = jest.fn()
    const handler = createHandler([
      iterable([
        logger(log),
      ]),
    ])

    innet([1, 2, 3], handler)
    innet(new Set([1, 2, 3]), handler)

    expect(log).toBeCalledTimes(2)

    innet({}, handler)

    expect(log).toBeCalledTimes(2)
  })
})
