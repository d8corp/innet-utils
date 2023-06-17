import innet, { createHandler } from 'innet'

import { call } from './call'

describe('call', () => {
  it('should call a function', () => {
    const fn = jest.fn()
    const callHandler = createHandler([call])
    innet(fn, callHandler)

    expect(fn).toBeCalledTimes(1)
  })
})
