const Koa = require('koa');
const Router = require('koa-router');

const userRouter = new Router({prefix:'/users'});
const app = new Koa();

userRouter.get('/:id',(ctx,next) => {
    console.log(ctx.params);
    console.log(ctx.query);
    ctx.body = 'haha';
})

app.use(userRouter.routes());


app.listen(8000,() => {
    console.log('hello world 03');
})

