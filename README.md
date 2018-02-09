# koa-routed

Route decorator for koa.

## Installation

babel is required.
 - babel-preset-es2017
 - babel-plugin-transform-decorators-legacy
 
 

```bash
$ npm install koa-route -S
```

## Example


```js
const routed = require('koa-routed');
const Koa = require('koa');
const app = new Koa();

const person = {

    @routed('/hello')
    sayHello(ctx, next) {
        ctx.body = 'Hello!'
    },

    @routed('/hi', {method:'post'})
    sayHi(ctx, next) {
        ctx.body = 'Hi!'
    },
};

app.use(person.sayHello);
app.use(person.sayHi);

app.listen(3000);
console.log('listening on port 3000');
```

## License

MIT