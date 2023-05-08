import { useApp } from 'innet';
import '../createConditionPlugin/index.es6.js';
import { createConditionPlugin } from '../createConditionPlugin/createConditionPlugin.es6.js';

var nullish = createConditionPlugin(function () { return useApp() === null; });

export { nullish };
