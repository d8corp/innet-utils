import { useApp } from 'innet';
import '../createConditionPlugin/index.es6.js';
import { createConditionPlugin } from '../createConditionPlugin/createConditionPlugin.es6.js';

var iterable = createConditionPlugin(function () {
    var app = useApp();
    return typeof app === 'object' && Symbol.iterator in app;
});

export { iterable };
