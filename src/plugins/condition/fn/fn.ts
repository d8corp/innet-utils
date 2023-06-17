import { useApp } from 'innet'

import { createConditionPlugin } from '../../../utils'

export const fn = createConditionPlugin(() => typeof useApp() === 'function')
