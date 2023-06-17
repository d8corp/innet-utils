import innet, { createHandler, useApp } from 'innet'

import { logger } from '.'

describe('logger', () => {
  it('runs for only null', () => {
    const log = jest.fn()
    const handler = createHandler([
      logger(() => log(useApp())),
    ])

    innet(undefined, handler)
    expect(log).toBeCalledWith(undefined)

    innet([], handler)
    expect(log).toBeCalledWith([])

    innet('null', handler)
    expect(log).toBeCalledWith('null')

    innet(1, handler)
    expect(log).toBeCalledWith(1)
    expect(log).toBeCalledTimes(4)
  })
})
