import { createConditionPlugin } from '../createConditionPlugin'

export const asyncIterable = createConditionPlugin(app => Symbol.asyncIterator in app)
