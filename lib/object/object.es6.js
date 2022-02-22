import { createConditionPlugin } from '../createConditionPlugin/createConditionPlugin.es6.js';

const object = createConditionPlugin(app => typeof app === 'object');

export { object };
