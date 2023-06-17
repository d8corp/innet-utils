import { useApp } from 'innet';
import '../../../utils/index.es6.js';
import { createConditionPlugin } from '../../../utils/createConditionPlugin/createConditionPlugin.es6.js';

const iterable = createConditionPlugin(() => {
    const app = useApp();
    return typeof app === 'object' && Symbol.iterator in app;
});

export { iterable };
