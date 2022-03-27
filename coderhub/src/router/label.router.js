const Router = require('koa-router');

const {verifyAuth} = require('../middleware/auth.middle');
const {create,list} = require('../controller/label.controller');

const labelRouter = new Router({prefix:'/label'});

console.log(11);
labelRouter.post('/',verifyAuth,create);
labelRouter.get('/',list);

module.exports = labelRouter;