import { useApp } from 'innet'

import { createConditionPlugin } from '../../../utils'

export const object = createConditionPlugin(() => typeof useApp() === 'object')
