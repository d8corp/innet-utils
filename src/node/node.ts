import { useApp } from 'innet'

import { createConditionPlugin } from '../createConditionPlugin'

export const node = createConditionPlugin(() => useApp() instanceof Node)
