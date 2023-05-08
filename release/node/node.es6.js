import { useApp } from 'innet';
import '../createConditionPlugin/index.es6.js';
import { createConditionPlugin } from '../createConditionPlugin/createConditionPlugin.es6.js';

var node = createConditionPlugin(function () { return useApp() instanceof Node; });

export { node };
