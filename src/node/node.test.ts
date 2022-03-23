import innet, { createHandler } from 'innet'

import { node } from '..'

describe('node', () => {
  it('runs for only node', () => {
    let count = 0
    const log = () => () => count++
    const handler = createHandler([
      node([log])
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
    innet(() => {}, handler)

    expect(count).toBe(0)

    innet(document.createElement('div'), handler)
    expect(count).toBe(1)
  })
})
