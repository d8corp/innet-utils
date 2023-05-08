import { useApp } from 'innet';
import '../createConditionPlugin/index.es6.js';
import { createConditionPlugin } from '../createConditionPlugin/createConditionPlugin.es6.js';

var object = createConditionPlugin(function () { return typeof useApp() === 'object'; });

export { object };
