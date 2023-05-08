import { useApp } from 'innet'

import { createConditionPlugin } from '../createConditionPlugin'

export const string = createConditionPlugin(() => typeof useApp() === 'string')
