import innet from 'innet'

import { createSubPlugin, SubPlugin } from '../createSubPlugin'

export interface Condition {
  (app: any): boolean
}

export function createConditionPlugin (condition: Condition, key?: string): SubPlugin {
  return createSubPlugin(
    (app, next, handler, plugins) => (
      condition(app) ? innet(app, handler, plugins) : next()
    ),
    key,
  )
}
