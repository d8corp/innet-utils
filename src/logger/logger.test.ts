import innet, { createHandler } from 'innet'

import { logger } from '.'

describe('logger', () => {
  it('runs for only null', () => {
    const log = jest.fn()
    const handler = createHandler([
      logger(log),
    ])

    innet(undefined, handler)
    expect(log).toBeCalledWith(undefined, handler)

    innet([], handler)
    expect(log).toBeCalledWith([], handler)

    innet('null', handler)
    expect(log).toBeCalledWith('null', handler)

    innet(1, handler)
    expect(log).toBeCalledWith(1, handler)
    expect(log).toBeCalledTimes(4)
  })
})
