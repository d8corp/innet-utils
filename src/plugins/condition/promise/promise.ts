import { useApp } from 'innet'

import { createConditionPlugin } from '../../../utils'

export const promise = createConditionPlugin(() => useApp() instanceof Promise)
