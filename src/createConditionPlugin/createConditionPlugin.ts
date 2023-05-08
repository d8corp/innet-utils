import { NEXT, runPlugins, useApp, useHandler } from 'innet'

import { createSubPlugin, type SubPlugin } from '../createSubPlugin'

export interface Condition {
  (): boolean
}

export function createConditionPlugin (condition: Condition, key?: symbol): SubPlugin {
  return createSubPlugin(
    plugins => {
      if (!condition()) return NEXT

      runPlugins(useApp(), useHandler(), plugins)
    },
    key,
  )
}
