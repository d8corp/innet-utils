import { createConditionPlugin } from '../createConditionPlugin/createConditionPlugin.es6.js';

const iterable = createConditionPlugin(app => Symbol.iterator in app);

export { iterable };
