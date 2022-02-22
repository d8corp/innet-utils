import innet from 'innet';

function arraySync() {
    return (app, next, handler) => next(app.map(a => innet(a, handler)));
}

export { arraySync };
