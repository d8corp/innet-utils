import { useApp } from 'innet'

import { createConditionPlugin } from '../createConditionPlugin'

export const number = createConditionPlugin(() => typeof useApp() === 'number')
