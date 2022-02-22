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

Or you can include the scripts into the `head`.
```html
<!-- Target (innet) -->
<script defer src="https://unpkg.com/innet/innet.min.js"></script>

<!-- Target (innetUtils) -->
<script defer src="https://unpkg.com/@innet/utils/innetUtils.min.js"></script>
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

You can pass to the logger any function which will get `app` and `handler`

## createSubPlugin
This function helps create a plugin which should contains other plugins.

For example let's create `exist` plugin which use own plugins if app is not `undefined` or `null`
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

Now we can use it
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
This is a function based on `createSubPlugin`, but has simplified interface.
With it, you can easily eject some types of applications.

For example let's create a plugin to eject numbers
```typescript
import { createConditionPlugin } from '@innet/utils'

const number = createConditionPlugin([
  app => typeof app === 'number',
])
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

The logger will not be run because of the `stop` plugin

## async
This plugin helps to work with async, just an example
```typescript
import innet, { createHandler } from 'innet'
import { async, logger } from '@innet/utils'

const handler = createHandler([
  async,
  logger(console.log),
])

innet(1, handler)
// > 1, handler

const promise = new Promise(resolve => resolve('test'))

innet(promise, handler)
// nothing happens

await promise
// > 'test', handler
```

## nullish
You can use it to eject `null` or `undefined`

```typescript
import innet, { createHandler } from 'innet'
import { stop, logger, nullish } from '@innet/utils'

const handler = createHandler([
  nullish([
    stop,
  ]),
  logger(console.log),
])

innet(undefined, handler)
innet(null, handler)
// nothing happens

innet('test', handler)
// > 'test', handler
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

With the next handler, `innet` returns an array overridden by the handler
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
but if the array contains a promise, it waits for the end of the promise and then handles the next items.
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
import { array, arrayAsync, async, logger } from '@innet/utils'

const handler = createHandler([
  async,
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
import { array, arrayAsync, async, logger } from '@innet/utils'

const handler = createHandler([
  async,
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
