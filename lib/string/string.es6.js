import { createConditionPlugin } from '../createConditionPlugin/createConditionPlugin.es6.js';

const string = createConditionPlugin(app => typeof app === 'string');

export { string };
