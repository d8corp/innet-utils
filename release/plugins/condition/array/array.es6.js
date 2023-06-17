import { useApp } from 'innet';
import '../../../utils/index.es6.js';
import { createConditionPlugin } from '../../../utils/createConditionPlugin/createConditionPlugin.es6.js';

const array = createConditionPlugin(() => Array.isArray(useApp()));

export { array };
