import { useApp } from 'innet'

import { createConditionPlugin } from '../../../utils'

export const node = createConditionPlugin(() => useApp() instanceof Node)
