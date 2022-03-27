const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');//用于解析json格式数据
const multer = require('koa-multer');//用于解析form-data格式的数据


const userRouter = new Router({prefix:'/products'});
const app = new Koa();

const upload = multer();

app.use(bodyParser());

userRouter.post('/',upload.any(),(ctx,next) => {
    console.log(ctx.request.body);//koa里的request
    console.log(ctx.req.body);//原生http里的req
    ctx.body = 'xixi';
})

app.use(userRouter.routes());


app.listen(8000,() => {
    console.log('hello world 04');
})

