import innet from 'innet'

export function arraySync () {
  return (app, next, handler) => next(app.map(a => innet(a, handler)))
}
