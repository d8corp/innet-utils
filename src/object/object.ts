import { createConditionPlugin } from '../createConditionPlugin'

export const object = createConditionPlugin(app => typeof app === 'object')
