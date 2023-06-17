import innet, { useApp, NEXT, useHandler } from 'innet';

function arraySync() {
    return () => {
        const app = useApp();
        if (!Array.isArray(app))
            return NEXT;
        const handler = useHandler();
        for (let i = 0; i < app.length; i++) {
            innet(app[i], handler);
        }
    };
}

export { arraySync };
