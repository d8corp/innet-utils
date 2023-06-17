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
import innet, { createHandler, useApp } from 'innet'
import { logger } from '@innet/utils'

const handler = createHandler([
  logger(() => {
    console.log(useApp())
  }),
])

innet(1, handler)
// > 1
```

You can pass some function to the logger. You can use hooks inside the function.

## createSubPlugin
This function helps to create a plugin which contains other plugins.

For example let's create `exist` plugin that uses sub-plugins if app is not `undefined` or `null`.

```typescript
import innet, { NEXT, useApp, runPlugins } from 'innet'
import { createSubPlugin } from '@innet/utils'

const exist = createSubPlugin(
  plugins => {
    const app = useApp()

    if (app === null || app === undefined) return NEXT

    runPlugins(app, useHandler(), plugins)
  },
)
```

Now we can use it.

```typescript
import innet, { createHandler, useApp } from 'innet'
import { logger } from '@innet/utils'

const handler = createHandler([
  exist([
    logger(() => console.log(useApp())),
  ]),
])

innet(null, handler)
innet(undefined, handler)
// nothing happens

innet('test', handler)
// > 'test'
```

## createConditionPlugin
This function based on `createSubPlugin`, but has simplified interface.
With it, you can easily eject some types of applications.

For example let's create a plugin to eject numbers.

```typescript
import { useApp } from "innet"
import { createConditionPlugin } from '@innet/utils'

const number = createConditionPlugin(() => typeof useApp() === 'number')
```

## number
This plugin is right from the last example.
Let's take a look at usage.

```typescript
import innet, { createHandler, useApp } from 'innet'
import { number, logger } from '@innet/utils'

const handler = createHandler([
  number([
    logger(() => console.log(useApp())),
  ]),
])

innet(null, handler)
innet('test', handler)
innet('1', handler)
// nothing happens

innet(1, handler)
// > 1
```

## string
This plugin handles only `string` values.

```typescript
import innet, { createHandler, useApp } from 'innet'
import { string, logger } from '@innet/utils'

const handler = createHandler([
  string([
    logger(() => console.log(useApp())),
  ]),
])

innet(null, handler)
innet(1, handler)
// nothing happens

innet('1', handler)
// > '1'
```

## fn
This plugin handles only `function` values.

```typescript
import innet, { createHandler, useApp } from 'innet'
import { fn, logger } from '@innet/utils'

const handler = createHandler([
  fn([
    logger(() => console.log(useApp())),
  ]),
])

innet(null, handler)
innet(1, handler)
innet('1', handler)
// nothing happens

innet(() => {}, handler)
// > () => {}
```

## node
This plugin handles only `Node` values.

```typescript
import innet, { createHandler, useApp } from 'innet'
import { node, logger } from '@innet/utils'

const handler = createHandler([
  node([
    logger(() => console.log(useApp())),
  ]),
])

innet(null, handler)
innet(1, handler)
innet('1', handler)
// nothing happens

innet(document.createElement('div'), handler)
// > div
```

## promise
This plugin handles only `promise` values.

```typescript
import innet, { createHandler, useApp } from 'innet'
import { promise, logger } from '@innet/utils'

const handler = createHandler([
  promise([
    logger(() => console.log(useApp())),
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
// > promise
```

## async
This plugin helps to work with async, just an example:
```typescript
import innet, { createHandler, useApp } from 'innet'
import { async, logger } from '@innet/utils'

const handler = createHandler([
  async,
  logger(() => console.log(useApp())),
])

innet(1, handler)
// > 1

const app = new Promise(resolve => resolve('test'))

innet(app, handler)
// nothing happens

await app
// > 'test'
```

## nullish
You can use it to eject `null`

```typescript
import innet, { createHandler, useApp } from 'innet'
import { logger, nullish } from '@innet/utils'

const handler = createHandler([
  nullish([
    logger(() => console.log(useApp())),
  ]),
])

innet(undefined, handler)
innet('test', handler)
// nothing happens

innet(null, handler)
// > null
```

## object
You can use it to eject an object

```typescript
import innet, { createHandler, useApp } from 'innet'
import { object, logger } from '@innet/utils'

const handler = createHandler([
  object([
    logger(() => console.log(useApp())),
  ]),
])

innet(undefined, handler)
innet('test', handler)
// nothing happens

innet({}, handler)
// > {}

innet(null, handler)
// > null
```

Because of `null` is an object, you get the last console log,
to prevent it, you can combine the plugin with `nullish`.
```typescript
import innet, { createHandler, useApp } from 'innet'
import { object, logger, nullish } from '@innet/utils'

const handler = createHandler([
  nullish([]),
  object([
    logger(() => console.log(useApp())),
  ]),
])

innet(undefined, handler)
innet('test', handler)
innet(null, handler)
// nothing happens

innet({}, handler)
// > {}

innet([], handler)
// > []
```

## array
Because of `array` is an object you get the last console log. To handle an array use plugin of `array`.

```typescript
import innet, { createHandler, useApp } from 'innet'
import { array, logger } from '@innet/utils'

const handler = createHandler([
  array([
    logger(() => console.log(useApp())),
  ]),
])

innet('test', handler)
innet({}, handler)
// nothing happens

innet([], handler)
// > []
```

### arraySync
This plugin helps to handle an array synchronously.
It runs the handler for each item of the array.

```typescript
import innet, { createHandler, useApp } from 'innet'
import { arraySync, logger } from '@innet/utils'

const handler = createHandler([
  arraySync,
  logger(() => console.log(useApp())),
])

innet('test', handler)
// > 'test'.

innet(['test'], handler)
// > 'test'

innet(['test1', 'test2'], handler)
// > 'test1'
// > 'test2'

innet(['test1', ['test2', ['test3', 'test4']]], handler)
// > 'test1'
// > 'test2'
// > 'test3'
// > 'test4'
```

### iterable
You can use it to eject iterable objects.

```typescript
import innet, { createHandler, useApp } from 'innet'
import { iterable, logger } from '@innet/utils'

const handler = createHandler([
  iterable([
    logger(() => console.log(useApp())),
  ]),
])

innet([1, 2, 3], handler)
// [1, 2, 3]
innet(new Set([1, 2, 3]), handler)
// Set([1, 2, 3])

innet({}, handler)
// nothing happens
```

### asyncIterable
You can use it to eject async iterable objects.

```typescript
import innet, { createHandler, useApp } from 'innet'
import { asyncIterable, logger } from '@innet/utils'

const handler = createHandler([
  asyncIterable([
    logger(() => console.log(useApp())),
  ]),
])

innet([1, 2, 3], handler)
innet(new Set([1, 2, 3]), handler)
// nothing happens

async function * test () {}

innet(test(), handler)
// Promise
```

## Issues
If you find a bug or have a suggestion, please file an issue on [GitHub](https://github.com/d8corp/innet-utils/issues).

[![issues](https://img.shields.io/github/issues-raw/d8corp/innet-utils)](https://github.com/d8corp/innet-utils/issues)
