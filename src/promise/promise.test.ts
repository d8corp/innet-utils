import innet, { createHandler } from 'innet'

import { promise } from '..'

describe('promise', () => {
  it('runs for only promise', () => {
    let count = 0
    const log = () => () => count++
    const handler = createHandler([
      promise([log])
    ])

    innet(undefined, handler)
    innet([], handler)
    innet(1, handler)
    innet({}, handler)
    innet(new Set(), handler)
    innet(Symbol(), handler)
    innet(null, handler)
    innet('null', handler)

    expect(count).toBe(0)

    innet(new Promise(resolve => resolve(undefined)), handler)
    expect(count).toBe(1)
  })
})
