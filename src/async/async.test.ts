import innet, { createHandler } from 'innet'

import { async } from '.'

describe('async', () => {
  it('works', async () => {
    const sum = () => ([a, b]) => a + b

    const app1 = [13, 42]
    const app2 = new Promise(resolve => resolve([7, 13]))

    const handler = createHandler([
      async,
      sum,
    ])

    expect(innet(app1, handler)).toBe(55)
    expect(await innet(app2, handler)).toBe(20)
  })
})
