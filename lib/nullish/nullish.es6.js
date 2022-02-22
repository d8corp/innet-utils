import { createConditionPlugin } from '../createConditionPlugin/createConditionPlugin.es6.js';

const nullish = createConditionPlugin(app => app === null);

export { nullish };
