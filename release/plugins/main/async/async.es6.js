import innet, { useApp, NEXT, useHandler } from 'innet';

function async() {
    return () => {
        const app = useApp();
        if (!(app instanceof Promise))
            return NEXT;
        const handler = useHandler();
        app.then(data => innet(data, handler));
    };
}

export { async };
