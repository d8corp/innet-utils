import { useApp } from 'innet'

import { createConditionPlugin } from '../../../utils'

export const iterable = createConditionPlugin(() => {
  const app = useApp()

  return typeof app === 'object' && Symbol.iterator in app
})
