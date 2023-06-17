import { useApp } from 'innet'

import { createConditionPlugin } from '../../../utils'

export const nullish = createConditionPlugin(() => useApp() === null)
