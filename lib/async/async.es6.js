import innet from 'innet';

function async() {
    return (app, next, handler) => {
        if (app instanceof Promise) {
            return app.then(data => innet(data, handler));
        }
        return next();
    };
}

export { async };
