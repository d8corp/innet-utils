import innet, { useApp, NEXT, useHandler } from 'innet';

function async() {
    return function () {
        var app = useApp();
        if (!(app instanceof Promise))
            return NEXT;
        var handler = useHandler();
        app.then(function (data) { return innet(data, handler); });
    };
}

export { async };
