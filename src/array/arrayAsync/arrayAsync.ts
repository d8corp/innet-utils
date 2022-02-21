import innet from 'innet'

export function arrayAsync () {
  return (app, next, handler) => {
    const newApp = []

    function run (i) {
      if (i < app.length) {
        const result = innet(app[i], handler)

        if (result instanceof Promise) {
          return result.then(val => {
            newApp[i] = val
            return run(i + 1)
          })
        } else {
          newApp[i] = result
          return run(i + 1)
        }
      } else {
        return next(newApp)
      }
    }

    return run(0)
  }
}
