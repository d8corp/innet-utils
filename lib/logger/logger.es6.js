function logger(callback) {
    return () => (app, next, handler) => {
        callback(app, handler);
        return next();
    };
}

export { logger };
