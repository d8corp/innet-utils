import innet, { createHandler } from 'innet'

import { logger, number } from '..'

describe('number', () => {
  test('example', () => {
    const log = jest.fn()

    const handler = createHandler([
      number([logger(log)]),
    ])

    innet(null, handler)
    innet('test', handler)
    innet('1', handler)

    expect(log).toBeCalledTimes(0)

    innet(1, handler)

    expect(log).toBeCalledTimes(1)
    expect(log).toBeCalledWith(1, handler)
  })
})
