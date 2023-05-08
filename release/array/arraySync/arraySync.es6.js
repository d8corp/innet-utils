import innet, { useApp, NEXT, useHandler } from 'innet';

function arraySync() {
    return function () {
        var app = useApp();
        if (!Array.isArray(app))
            return NEXT;
        var handler = useHandler();
        for (var i = 0; i < app.length; i++) {
            innet(app[i], handler);
        }
    };
}

export { arraySync };
