import { useApp } from 'innet'

import { createConditionPlugin } from '../../../utils'

export const array = createConditionPlugin(() => Array.isArray(useApp()))
