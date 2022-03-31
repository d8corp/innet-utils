import { createConditionPlugin } from '../createConditionPlugin/createConditionPlugin.es6.js';

const asyncIterable = createConditionPlugin(app => Symbol.asyncIterator in app);

export { asyncIterable };
