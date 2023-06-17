import { createHandler } from 'innet'

import { call } from '../../plugins'

export const callHandler = createHandler([call])
