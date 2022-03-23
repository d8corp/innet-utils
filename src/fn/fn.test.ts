import innet, { createHandler } from 'innet'

import { fn } from '..'

describe('fn', () => {
  it('runs for only function', () => {
    let count = 0
    const log = () => () => count++
    const handler = createHandler([
      fn([log])
    ])

    innet(undefined, handler)
    innet([], handler)
    innet(1, handler)
    innet({}, handler)
    innet(new Set(), handler)
    innet(Symbol(), handler)
    innet(null, handler)
    innet('null', handler)
    innet(new Promise(resolve => resolve(undefined)), handler)

    expect(count).toBe(0)

    innet(() => {}, handler)
    expect(count).toBe(1)

    innet(function () {}, handler)
    expect(count).toBe(2)
  })
})
