const Koa = require('koa');
const staticAssets = require('koa-static');

const app = new Koa();


// app.use(staticAssets('../09_express_test/build'));//访问静态资源

app.use((ctx,next) => {
    const isLogin = false;
    if(!isLogin) {
        ctx.app.emit('error',new Error('您还没有登录'),ctx);
    }
});

app.on('error',(err,ctx) => {
    ctx.body = '您还没有登录';
})


app.listen(8000,() => {
    console.log('hello world 06');
})

