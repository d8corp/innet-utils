import { createConditionPlugin } from '../createConditionPlugin/createConditionPlugin.es6.js';

const number = createConditionPlugin(app => typeof app === 'number');

export { number };
