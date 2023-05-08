import { useApp } from 'innet'

import { createConditionPlugin } from '../createConditionPlugin'

export const promise = createConditionPlugin(() => useApp() instanceof Promise)
