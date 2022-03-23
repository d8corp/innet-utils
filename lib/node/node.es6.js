import { createConditionPlugin } from '../createConditionPlugin/createConditionPlugin.es6.js';

const node = createConditionPlugin(app => app instanceof Node);

export { node };
