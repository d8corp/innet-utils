import { createConditionPlugin } from '../createConditionPlugin/createConditionPlugin.es6.js';

const promise = createConditionPlugin(app => app instanceof Promise);

export { promise };
