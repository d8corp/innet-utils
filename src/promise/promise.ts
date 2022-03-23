import { createConditionPlugin } from '../createConditionPlugin'

export const promise = createConditionPlugin(app => app instanceof Promise)
