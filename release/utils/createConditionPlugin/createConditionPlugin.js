'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
require('../createSubPlugin/index.js');
var createSubPlugin = require('../createSubPlugin/createSubPlugin.js');

function createConditionPlugin(condition, key) {
    return createSubPlugin.createSubPlugin(plugins => {
        if (!condition())
            return innet.NEXT;
        innet.runPlugins(plugins);
    }, key);
}

exports.createConditionPlugin = createConditionPlugin;
