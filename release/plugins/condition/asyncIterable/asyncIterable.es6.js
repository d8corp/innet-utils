import { useApp } from 'innet';
import '../../../utils/index.es6.js';
import { createConditionPlugin } from '../../../utils/createConditionPlugin/createConditionPlugin.es6.js';

const asyncIterable = createConditionPlugin(() => {
    const app = useApp();
    return typeof app === 'object' && Symbol.asyncIterator in app;
});

export { asyncIterable };
