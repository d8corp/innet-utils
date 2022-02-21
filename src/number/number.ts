import { createConditionPlugin } from '../createConditionPlugin'

export const number = createConditionPlugin(app => typeof app === 'number')
