const Router = require('koa-router');

const router = new Router({prefix:'/users'});

router.get('/',(ctx,next) => {
    ctx.body = 'user list';
})

router.put('/',(ctx,next) => {
    ctx.body = 'put request';
})

module.exports = router;