import { createConditionPlugin } from '../../createConditionPlugin/createConditionPlugin.es6.js';

const array = createConditionPlugin(app => Array.isArray(app));

export { array };
