import innet, { createHandler } from 'innet'

import { array, arraySync, logger, number } from '../..'

describe('arraySync', () => {
  test('example1', () => {
    const log = jest.fn()

    const handler = createHandler([
      array([arraySync]),
      logger(log),
    ])

    innet('test1', handler)
    expect(log).toBeCalledTimes(1)
    expect(log).toBeCalledWith('test1', handler)

    innet(['test2', 'test3'], handler)

    expect(log).toBeCalledTimes(3)
    expect(log).toBeCalledWith('test2', handler)
    expect(log).toBeCalledWith('test3', handler)

    innet(['test4', ['test5', 'test6', ['test7', 'test8']]], handler)

    expect(log).toBeCalledTimes(8)
    expect(log).toBeCalledWith('test4', handler)
    expect(log).toBeCalledWith('test5', handler)
    expect(log).toBeCalledWith('test6', handler)
    expect(log).toBeCalledWith('test7', handler)
    expect(log).toBeCalledWith('test8', handler)
  })
  test('example2', () => {
    const handler = createHandler([
      array([arraySync]),
      number([() => app => app + 1]),
    ])

    const result = innet(['test1', [1, [12, null]]], handler)

    expect(result).toEqual(['test1', [2, [13, null]]])
  })
})
