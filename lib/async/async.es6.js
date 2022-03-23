import innet from 'innet';

function async() {
    return (app, next, handler) => app.then(data => innet(data, handler));
}

export { async };
