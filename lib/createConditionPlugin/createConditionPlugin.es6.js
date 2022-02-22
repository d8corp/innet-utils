import innet from 'innet';
import { createSubPlugin } from '../createSubPlugin/createSubPlugin.es6.js';

function createConditionPlugin(condition, key) {
    return createSubPlugin((app, next, handler, plugins) => (condition(app) ? innet(app, handler, plugins) : next()), key);
}

export { createConditionPlugin };
