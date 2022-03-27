const Koa = require('koa');

const app = new Koa();

app.use((ctx,next) => {
    ctx.body = 'hello world'
})

app.listen(8000,() => {
    console.log('hello world');
})

