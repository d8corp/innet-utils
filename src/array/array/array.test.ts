import innet, { createHandler } from 'innet'

import { array } from '.'

describe('array', () => {
  it('runs only array', () => {
    let count = 0
    const log = () => () => count++
    const handler = createHandler([array([log])])

    innet(undefined, handler)
    innet(null, handler)
    innet('null', handler)
    innet(1, handler)
    innet({}, handler)
    innet(new Set(), handler)
    innet(Symbol(), handler)

    expect(count).toBe(0)

    innet([], handler)
    expect(count).toBe(1)
  })
})
