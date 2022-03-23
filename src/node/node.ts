import { createConditionPlugin } from '../createConditionPlugin'

export const node = createConditionPlugin(app => app instanceof Node)
