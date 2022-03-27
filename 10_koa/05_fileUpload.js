const Koa = require('koa');
const Router = require('koa-router');
const multer = require('koa-multer');//用于解析form-data格式的数据


const uploadRouter = new Router({prefix:'/upload'});
const app = new Koa();

const upload = multer({
    dest:'./uploads/'
});


uploadRouter.post('/img',upload.single('img'),(ctx,next) => {
    console.log(ctx.request.body);//koa里的request
    console.log(ctx.req.file);//原生http里的req
    ctx.body = 'xixi';
})

app.use(uploadRouter.routes());


app.listen(8000,() => {
    console.log('hello world 05');
})

