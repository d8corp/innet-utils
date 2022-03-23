import innet, { createHandler } from 'innet'

import { string } from '..'

describe('string', () => {
  it('runs for only string', () => {
    let count = 0
    const log = () => () => count++
    const handler = createHandler([
      string([log])
    ])

    innet(undefined, handler)
    innet([], handler)
    innet(1, handler)
    innet({}, handler)
    innet(new Set(), handler)
    innet(Symbol(), handler)
    innet(null, handler)

    expect(count).toBe(0)

    innet('null', handler)
    expect(count).toBe(1)
  })
})
