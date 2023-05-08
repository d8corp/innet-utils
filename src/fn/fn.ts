import { useApp } from 'innet'

import { createConditionPlugin } from '../createConditionPlugin'

export const fn = createConditionPlugin(() => typeof useApp() === 'function')
