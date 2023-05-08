import { useApp } from 'innet';
import '../createConditionPlugin/index.es6.js';
import { createConditionPlugin } from '../createConditionPlugin/createConditionPlugin.es6.js';

var number = createConditionPlugin(function () { return typeof useApp() === 'number'; });

export { number };
