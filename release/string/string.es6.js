import { useApp } from 'innet';
import '../createConditionPlugin/index.es6.js';
import { createConditionPlugin } from '../createConditionPlugin/createConditionPlugin.es6.js';

var string = createConditionPlugin(function () { return typeof useApp() === 'string'; });

export { string };
