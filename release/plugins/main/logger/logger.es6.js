import { NEXT } from 'innet';

function logger(callback) {
    return () => () => {
        callback();
        return NEXT;
    };
}

export { logger };
