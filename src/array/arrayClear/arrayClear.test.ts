import innet, { createHandler } from 'innet'

import { array, arrayClear, arraySync } from '..'

describe('arrayClear', () => {
  test('example', () => {
    const handler = createHandler([
      array([
        arrayClear,
      ]),
    ])

    const result1 = innet(['test1', undefined, 'test2', undefined], handler)

    expect(result1).toEqual(['test1', 'test2'])

    const result2 = innet([undefined, undefined], handler)

    expect(result2).toEqual([])
  })
  test('deep', () => {
    const handler = createHandler([
      array([
        arraySync,
        arrayClear,
      ]),
    ])

    const result1 = innet(['test1', undefined, ['test2', undefined]], handler)

    expect(result1).toEqual(['test1', ['test2']])
  })
})
