import { createConditionPlugin } from '../createConditionPlugin'

export const string = createConditionPlugin(app => typeof app === 'string')
