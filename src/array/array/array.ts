import { createConditionPlugin } from '../../createConditionPlugin'

export const array = createConditionPlugin(app => Array.isArray(app))
