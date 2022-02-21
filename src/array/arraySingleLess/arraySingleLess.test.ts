import innet, { createHandler } from 'innet'

import { array, arrayClear, arraySingleLess, arraySync } from '..'

describe('arrayFlat', () => {
  test('example', () => {
    const handler = createHandler([
      array([
        arraySync,
        arraySingleLess,
      ]),
    ])

    expect(innet(['test1'], handler)).toEqual('test1')
    expect(innet(['test1', 'test2'], handler)).toEqual(['test1', 'test2'])
    expect(innet(['test1', ['test2']], handler)).toEqual(['test1', 'test2'])
    expect(innet(['test1', ['test2', 'test3']], handler)).toEqual(['test1', ['test2', 'test3']])
    expect(innet(['test1', ['test2', undefined]], handler)).toEqual(['test1', ['test2', undefined]])
    expect(innet(['test1', []], handler)).toEqual(['test1', undefined])
  })
  test('deep and clear', () => {
    const handler = createHandler([
      array([
        arraySync,
        arrayClear,
        arraySingleLess,
      ]),
    ])

    expect(innet(['test1', ['test2']], handler)).toEqual(['test1', 'test2'])
    expect(innet(['test1', ['test2', 'test3']], handler)).toEqual(['test1', ['test2', 'test3']])
    expect(innet(['test1', ['test2', undefined]], handler)).toEqual(['test1', 'test2'])
    expect(innet(['test1', []], handler)).toEqual('test1')
  })
})
