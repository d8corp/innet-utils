import innet, { createHandler } from 'innet'

import { object } from '..'

describe('object', () => {
  it('runs for any object', () => {
    let count = 0
    const log = () => () => count++
    const handler = createHandler([object([log])])

    innet(undefined, handler)
    innet('null', handler)
    innet(1, handler)
    innet(Symbol(), handler)

    expect(count).toBe(0)

    innet({}, handler)
    innet([], handler)
    innet(null, handler)
    innet(new Set(), handler)
    expect(count).toBe(4)
  })
})
