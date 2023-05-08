import innet, { createHandler } from 'innet'

import { createLogger } from '../testUtils'
import { number } from '.'

describe('number', () => {
  test('example', () => {
    const [log, logger] = createLogger()

    const handler = createHandler([
      number([logger]),
    ])

    innet(null, handler)
    innet('test', handler)
    innet('1', handler)

    expect(log).toBeCalledTimes(0)

    innet(1, handler)

    expect(log).toBeCalledTimes(1)
    expect(log).toBeCalledWith(1)
  })
})
