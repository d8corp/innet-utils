import { createHandler } from 'innet';
import '../../plugins/index.es6.js';
import { call } from '../../plugins/main/call/call.es6.js';

const callHandler = createHandler([call]);

export { callHandler };
