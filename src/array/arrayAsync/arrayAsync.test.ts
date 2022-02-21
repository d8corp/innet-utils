import innet, { createHandler } from 'innet'

import { array, arrayAsync, async, logger } from '../..'

describe('arrayAsync', () => {
  test('example', async () => {
    const log = jest.fn()

    const handler = createHandler([
      array([arrayAsync]),
      logger(log),
    ])

    innet('test1', handler)

    expect(log).toBeCalledTimes(1)
    expect(log).toBeCalledWith('test1', handler)

    const promise = new Promise(resolve => resolve('test3'))

    innet(['test2', promise, 'test4'], handler)

    expect(log).toBeCalledTimes(3)
    expect(log).toBeCalledWith('test2', handler)
    expect(log).toBeCalledWith(promise, handler)

    await promise

    expect(log).toBeCalledTimes(4)
    expect(log).toBeCalledWith('test4', handler)
  })
  test('async example', async () => {
    const log = jest.fn()

    const handler = createHandler([
      async,
      array([arrayAsync]),
      logger(log),
    ])

    innet('test1', handler)

    expect(log).toBeCalledTimes(1)
    expect(log).toBeCalledWith('test1', handler)

    const promise = new Promise(resolve => resolve('test3'))

    const result = innet(['test2', promise, 'test4'], handler)

    expect(log).toBeCalledTimes(2)
    expect(log).toBeCalledWith('test2', handler)

    await promise

    expect(log).toBeCalledTimes(3)
    expect(log).toBeCalledWith('test3', handler)

    await result

    expect(log).toBeCalledTimes(4)
    expect(log).toBeCalledWith('test4', handler)
  })
  test('error example', async () => {
    const log = jest.fn()
    const logError = jest.fn()

    const handler = createHandler([
      async,
      array([arrayAsync]),
      logger(log),
    ])

    const promise = new Promise((resolve, reject) => reject(Error()))

    const result = innet(['test1', promise, 'test2'], handler)

    expect(log).toBeCalledTimes(1)
    expect(log).toBeCalledWith('test1', handler)

    try {
      await result
    } catch (e) {
      logError(e)
    }

    expect(log).toBeCalledTimes(1)
    expect(logError).toBeCalledTimes(1)
  })
})
