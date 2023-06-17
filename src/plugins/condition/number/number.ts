import { useApp } from 'innet'

import { createConditionPlugin } from '../../../utils'

export const number = createConditionPlugin(() => typeof useApp() === 'number')
