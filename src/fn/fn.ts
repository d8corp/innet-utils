import { createConditionPlugin } from '../createConditionPlugin'

export const fn = createConditionPlugin(app => typeof app === 'function')
