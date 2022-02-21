import { createConditionPlugin } from '../createConditionPlugin'

export const nullish = createConditionPlugin(app => app === null)
