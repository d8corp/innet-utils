import { useApp } from 'innet';
import '../../../utils/index.es6.js';
import { createConditionPlugin } from '../../../utils/createConditionPlugin/createConditionPlugin.es6.js';

const fn = createConditionPlugin(() => typeof useApp() === 'function');

export { fn };
