import { NEXT, runPlugins, useApp, useHandler } from 'innet';
import '../createSubPlugin/index.es6.js';
import { createSubPlugin } from '../createSubPlugin/createSubPlugin.es6.js';

function createConditionPlugin(condition, key) {
    return createSubPlugin(function (plugins) {
        if (!condition())
            return NEXT;
        runPlugins(useApp(), useHandler(), plugins);
    }, key);
}

export { createConditionPlugin };
