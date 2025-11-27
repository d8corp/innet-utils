import { NEXT, runPlugins } from 'innet';
import '../createSubPlugin/index.es6.js';
import { createSubPlugin } from '../createSubPlugin/createSubPlugin.es6.js';

function createConditionPlugin(condition, key) {
    return createSubPlugin(plugins => {
        if (!condition())
            return NEXT;
        runPlugins(plugins);
    }, key);
}

export { createConditionPlugin };
