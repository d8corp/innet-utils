import innet, { createHandler } from 'innet'

import { createLogger } from '../../../testUtils'
import { arraySync } from '.'

describe('arraySync', () => {
  test('example1', () => {
    const [log, logger] = createLogger()

    const handler = createHandler([
      arraySync,
      logger,
    ])

    innet('test1', handler)
    expect(log).toBeCalledTimes(1)
    expect(log).toBeCalledWith('test1')

    innet(['test2', 'test3'], handler)

    expect(log).toBeCalledTimes(3)
    expect(log).toBeCalledWith('test2')
    expect(log).toBeCalledWith('test3')

    innet(['test4', ['test5', 'test6', ['test7', 'test8']]], handler)

    expect(log).toBeCalledTimes(8)
    expect(log).toBeCalledWith('test4')
    expect(log).toBeCalledWith('test5')
    expect(log).toBeCalledWith('test6')
    expect(log).toBeCalledWith('test7')
    expect(log).toBeCalledWith('test8')
  })
})
