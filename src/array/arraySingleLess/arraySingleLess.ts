export function arraySingleLess () {
  return (app, next) => app.length === 1 ? app[0] : app.length ? next(app) : undefined
}
