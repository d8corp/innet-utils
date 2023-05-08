import { NEXT } from 'innet';

function logger(callback) {
    return function () { return function () {
        callback();
        return NEXT;
    }; };
}

export { logger };
