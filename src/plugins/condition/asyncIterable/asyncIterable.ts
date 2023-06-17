import { useApp } from 'innet'

import { createConditionPlugin } from '../../../utils'

export const asyncIterable = createConditionPlugin(() => {
  const app = useApp()

  return typeof app === 'object' && Symbol.asyncIterator in app
})
