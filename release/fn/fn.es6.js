import { useApp } from 'innet';
import '../createConditionPlugin/index.es6.js';
import { createConditionPlugin } from '../createConditionPlugin/createConditionPlugin.es6.js';

var fn = createConditionPlugin(function () { return typeof useApp() === 'function'; });

export { fn };
