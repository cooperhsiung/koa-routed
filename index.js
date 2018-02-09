/**
 * Created by Cooper on 2018/02/09.
 */
var pathToRegexp = require('path-to-regexp');
const routed = module.exports = (path, opts = {}) => (target, name, descriptor) => {
    const fn = descriptor.value;
    descriptor.value = function (ctx, next) {
        opts.method = (opts.method || 'GET').toUpperCase();
        if (pathToRegexp(path).test(ctx.path) && opts.method === ctx.method) {
            return fn.call(target, ctx, next)
        }
        next()
    };
    return descriptor
};

