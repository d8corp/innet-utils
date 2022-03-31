import { createConditionPlugin } from '../createConditionPlugin'

export const iterable = createConditionPlugin(app => Symbol.iterator in app)
