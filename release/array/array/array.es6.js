import { useApp } from 'innet';
import '../../createConditionPlugin/index.es6.js';
import { createConditionPlugin } from '../../createConditionPlugin/createConditionPlugin.es6.js';

var array = createConditionPlugin(function () { return Array.isArray(useApp()); });

export { array };
