export function arrayClear () {
  return (app, next) => {
    const result = []

    for (let i = 0; i < app.length; i++) {
      if (app[i] !== undefined) {
        result.push(app[i])
      }
    }

    return next(result)
  }
}
