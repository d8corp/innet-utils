import { useApp } from 'innet'

import { createConditionPlugin } from '../../createConditionPlugin'

export const array = createConditionPlugin(() => Array.isArray(useApp()))
