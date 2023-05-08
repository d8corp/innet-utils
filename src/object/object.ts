import { useApp } from 'innet'

import { createConditionPlugin } from '../createConditionPlugin'

export const object = createConditionPlugin(() => typeof useApp() === 'object')
