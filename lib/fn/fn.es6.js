import { createConditionPlugin } from '../createConditionPlugin/createConditionPlugin.es6.js';

const fn = createConditionPlugin(app => typeof app === 'function');

export { fn };
