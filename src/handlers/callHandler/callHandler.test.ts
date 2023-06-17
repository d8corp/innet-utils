import innet from 'innet'

import { callHandler } from './callHandler'

describe('callHandler', () => {
  it('should call a function', () => {
    const fn = jest.fn()
    innet(fn, callHandler)

    expect(fn).toBeCalledTimes(1)
  })
})
