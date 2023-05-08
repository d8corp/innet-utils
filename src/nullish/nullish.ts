import { useApp } from 'innet'

import { createConditionPlugin } from '../createConditionPlugin'

export const nullish = createConditionPlugin(() => useApp() === null)
