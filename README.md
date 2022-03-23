<a href="https://www.npmjs.com/package/innet">
  <img src="https://raw.githubusercontent.com/d8corp/innet/main/logo.svg" align="left" width="90" height="90" alt="InnetJs logo by Mikhail Lysikov">
</a>

# &nbsp; @innet/utils

&nbsp;

[![NPM](https://img.shields.io/npm/v/@innet/utils.svg)](https://www.npmjs.com/package/@innet/utils)
[![downloads](https://img.shields.io/npm/dm/@innet/utils.svg)](https://www.npmtrends.com/@innet/utils)
[![changelog](https://img.shields.io/badge/Changelog-⋮-brightgreen)](https://changelogs.xyz/@innet/utils)
[![license](https://img.shields.io/npm/l/@innet/utils)](https://github.com/d8corp/innet-utils/blob/main/LICENSE)

## Abstract
Here you can find some utils to easily create [innet](https://www.npmjs.com/package/innet) plugins.

[![stars](https://img.shields.io/github/stars/d8corp/innet-utils?style=social)](https://github.com/d8corp/innet-utils/stargazers)
[![watchers](https://img.shields.io/github/watchers/d8corp/innet-utils?style=social)](https://github.com/d8corp/innet-utils/watchers)

## Install
npm
```bash
npm i @innet/utils
```
yarn
```bash
yarn add @innet/utils
```

## logger
This function helps to log your application.
```typescript
import innet, { createHandler } from 'innet'
import { logger } from '@innet/utils'

const handler = createHandler([
  logger(console.log),
])

innet(1, handler)
// > 1, handler
```

You can pass any function to the logger. The function will get `app` and `handler`.

## createSubPlugin
This function helps to create a plugin which contains other plugins.

For example let's create `exist` plugin that uses sub-plugins if app is not `undefined` or `null`.
```typescript
import innet from 'innet'
import { createSubPlugin } from '@innet/utils'

export const exist = createSubPlugin(
  (app = null, next, handler, plugins) => {
    if (app === null) {
      // run outer plugins
      return next()
    }

    // run sub plugins
    return innet(app, handler, plugins)
  }
)
```

Now we can use it.
```typescript
import innet, { createHandler } from 'innet'
import { logger } from '@innet/utils'

const handler = createHandler([
  exist([
    logger(console.log),
  ]),
])

innet(null, handler)
innet(undefined, handler)
// nothing happens

innet('test', handler)
// > 'test', handler
```

## createConditionPlugin
This function based on `createSubPlugin`, but has simplified interface.
With it, you can easily eject some types of applications.

For example let's create a plugin to eject numbers.
```typescript
import { createConditionPlugin } from '@innet/utils'

const number = createConditionPlugin(app => typeof app === 'number')
```

## number
This plugin is right from the last example.
Let's take a look at usage.

```typescript
import innet, { createHandler } from 'innet'
import { number, logger } from '@innet/utils'

const handler = createHandler([
  number([
    logger(console.log),
  ]),
])

innet(null, handler)
innet('test', handler)
innet('1', handler)
// nothing happens

innet(1, handler)
// > 1, handler
```

## string
This plugin handles only `string` values.

```typescript
import innet, { createHandler } from 'innet'
import { string, logger } from '@innet/utils'

const handler = createHandler([
  string([
    logger(console.log),
  ]),
])

innet(null, handler)
innet(1, handler)
// nothing happens

innet('1', handler)
// > '1', handler
```

## fn
This plugin handles only `function` values.

```typescript
import innet, { createHandler } from 'innet'
import { fn, logger } from '@innet/utils'

const handler = createHandler([
  fn([
    logger(console.log),
  ]),
])

innet(null, handler)
innet(1, handler)
innet('1', handler)
// nothing happens

innet(() => {}, handler)
// > () => {}, handler
```

## node
This plugin handles only `Node` values.

```typescript
import innet, { createHandler } from 'innet'
import { node, logger } from '@innet/utils'

const handler = createHandler([
  node([
    logger(console.log),
  ]),
])

innet(null, handler)
innet(1, handler)
innet('1', handler)
// nothing happens

innet(document.createElement('div'), handler)
// > div, handler
```

## stop
This is a simple plugin to stop running of plugins and return application as is.
```typescript
import innet, { createHandler } from 'innet'
import { stop, logger } from '@innet/utils'

const handler = createHandler([
  stop,
  logger(console.log),
])

innet(1, handler)
// nothing happens
```

The logger will not be run because of the `stop` plugin.

## promise
This plugin handles only `promise` values.

```typescript
import innet, { createHandler } from 'innet'
import { promise, logger } from '@innet/utils'

const handler = createHandler([
  promise([
    logger(console.log),
  ]),
])

innet(null, handler)
innet(1, handler)
innet('1', handler)
// nothing happens

innet(
  new Promise(resolve => resolve()),
  handler,
)
// > promise, handler
```

## async
This plugin helps to work with async, just an example:
```typescript
import innet, { createHandler } from 'innet'
import { async, promise, logger } from '@innet/utils'

const handler = createHandler([
  promise([
    async,
  ]),
  logger(console.log),
])

innet(1, handler)
// > 1, handler

const app = new Promise(resolve => resolve('test'))

innet(app, handler)
// nothing happens

await app
// > 'test', handler
```

## nullish
You can use it to eject `null`

```typescript
import innet, { createHandler } from 'innet'
import { logger, nullish } from '@innet/utils'

const handler = createHandler([
  nullish([
    logger(console.log),
  ]),
])

innet(undefined, handler)
innet('test', handler)
// nothing happens

innet(null, handler)
// > null, handler
```

## object
You can use it to eject an object

```typescript
import innet, { createHandler } from 'innet'
import { object, logger } from '@innet/utils'

const handler = createHandler([
  object([
    logger(console.log),
  ]),
])

innet(undefined, handler)
innet('test', handler)
// nothing happens

innet({}, handler)
// > {}, handler

innet(null, handler)
// > null, handler
```

Because of `null` is an object, you get the last console log,
to prevent it, you can combine the plugin with `nullish` and `stop`
```typescript
import innet, { createHandler } from 'innet'
import { object, logger, nullish, stop } from '@innet/utils'

const handler = createHandler([
  nullish([
    stop,
  ]),
  object([
    logger(console.log),
  ]),
])

innet(undefined, handler)
innet('test', handler)
innet(null, handler)
// nothing happens

innet({}, handler)
// > {}, handler

innet([], handler)
// > [], handler
```

## array
Because of `array` is an object you get the last console log. To handle an array use plugin of `array`.

```typescript
import innet, { createHandler } from 'innet'
import { array, logger } from '@innet/utils'

const handler = createHandler([
  array([
    logger(console.log),
  ]),
])

innet('test', handler)
innet({}, handler)
// nothing happens

innet([], handler)
// > [], handler
```

### arraySync
This plugin helps to handle an array synchronously.
It runs the handler for each item of the array.

```typescript
import innet, { createHandler } from 'innet'
import { array, arraySync, logger } from '@innet/utils'

const handler = createHandler([
  array([arraySync]),
  logger(console.log),
])

innet('test', handler)
// > 'test', handler.

innet(['test'], handler)
// > 'test', handler

innet(['test1', 'test2'], handler)
// > 'test1', handler
// > 'test2', handler

innet(['test1', ['test2', ['test3', 'test4']]], handler)
// > 'test1', handler
// > 'test2', handler
// > 'test3', handler
// > 'test4', handler
```

Another example with combination of some plugins.
```typescript
import innet, { createHandler } from 'innet'
import { array, arraySync, number } from '@innet/utils'

const handler = createHandler([
  array([arraySync]),
  number([() => app => app + 1]),
])

console.log(
  innet(['test1', [1, [12, null]]], handler)
)
// > ['test1', [2, [13, null]]]
```

### arrayAsync
This plugin helps to handle an array asynchronously.

It runs the handler for each item of the array,
but if the array contains a promise, it waits for the end of the promise and then handles the next item.
```typescript
import innet, { createHandler } from 'innet'
import { array, arrayAsync, logger } from '@innet/utils'

const handler = createHandler([
  array([arrayAsync]),
  logger(console.log),
])

const promise = new Promise(resolve => resolve('test2'))

innet(['test1', promise, 'test3'], handler)
// > 'test1', handler
// > promise, handler

await promise
// > 'test3', handler
```

You can combine it with `async` plugin to handle promises.
```typescript
import innet, { createHandler } from 'innet'
import { array, arrayAsync, async, promise, logger } from '@innet/utils'

const handler = createHandler([
  promise([async]),
  array([arrayAsync]),
  logger(console.log),
])

const promise = new Promise(resolve => resolve('test2'))

const result = innet(['test1', promise, 'test3'], handler)
// > 'test1', handler

await promise
// > 'test2', handler

await result
// > 'test3', handler
```

If a promise throws an error the handler get stop.
```typescript
import innet, { createHandler } from 'innet'
import { array, arrayAsync, async, promise, logger } from '@innet/utils'

const handler = createHandler([
  promise([async]),
  array([arrayAsync]),
  logger(console.log),
])

const error = Error()
const promise = new Promise((resolve, reject) => reject(error))

const result = innet(['test1', promise, 'test2'], handler)
// > 'test1', handler

try {
  await result
} catch (e) {
  // e === error
}
```

`test2` cannot be handled because of `promise` error.

### arrayClear
This plugin removes `undefined` from array.

```typescript
import innet, { createHandler } from 'innet'
import { array, arrayClear } from '@innet/utils'

const handler = createHandler([
  array([
    arrayClear,
  ]),
])

innet(['test1', undefined, 'test2', undefined], handler)
// ['test1', 'test2']

innet([undefined, undefined], handler)
// []
```

### arraySingleLess
This plugin removes arrays with a single value.

```typescript
import innet, { createHandler } from 'innet'
import { array, arraySync, arraySingleLess } from '@innet/utils'

const handler = createHandler([
  array([
    arraySync,
    arraySingleLess,
  ]),
])

innet(['test1'], handler)
// 'test1'

innet(['test1', 'test2'], handler)
// ['test1', 'test2']

innet(['test1', ['test2']], handler)
// ['test1', 'test2']

innet(['test1', []], handler)
// ['test1', undefined]
```

You can combine `arraySingleLess` with `arrayClear`
```typescript
import innet, { createHandler } from 'innet'
import { array, arraySync, arrayClear, arraySingleLess } from '@innet/utils'

const handler = createHandler([
  array([
    arraySync,
    arrayClear,
    arraySingleLess,
  ]),
])

innet(['test1', []], handler)
// 'test1'

innet(['test1', ['test2', undefined]], handler)
// ['test1', 'test2]
```

## Issues
If you find a bug or have a suggestion, please file an issue on [GitHub](https://github.com/d8corp/innet-utils/issues).

[![issues](https://img.shields.io/github/issues-raw/d8corp/innet-utils)](https://github.com/d8corp/innet-utils/issues)
