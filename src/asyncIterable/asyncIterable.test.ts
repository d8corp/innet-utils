import innet, { createHandler, type Plugin, useApp } from 'innet'

import { asyncIterable } from './asyncIterable'

function createLogger () {
  const log = jest.fn()
  const plugin: Plugin = () => () => {
    log(useApp())
  }

  return [log, plugin]
}

describe('asyncIterable', () => {
  it('works', () => {
    const [log, logger] = createLogger()
    const handler = createHandler([
      asyncIterable([
        logger,
      ]),
    ])

    innet([1, 2, 3], handler)
    innet(new Set([1, 2, 3]), handler)

    expect(log).toBeCalledTimes(0)

    async function * testFn () {}

    innet(testFn(), handler)

    expect(log).toBeCalledTimes(1)
  })
})
