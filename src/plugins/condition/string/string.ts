import { useApp } from 'innet'

import { createConditionPlugin } from '../../../utils'

export const string = createConditionPlugin(() => typeof useApp() === 'string')
