import innet, { createHandler } from 'innet'

import { nullish } from '..'

describe('null', () => {
  it('runs for only null', () => {
    let count = 0
    const log = () => () => count++
    const handler = createHandler([
      nullish([log])
    ])

    innet(undefined, handler)
    innet([], handler)
    innet('null', handler)
    innet(1, handler)
    innet({}, handler)
    innet(new Set(), handler)
    innet(Symbol(), handler)

    expect(count).toBe(0)

    innet(null, handler)
    expect(count).toBe(1)
  })
})
