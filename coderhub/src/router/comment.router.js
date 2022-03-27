const Router = require('koa-router');

const {verifyAuth,verifyPermission} = require('../middleware/auth.middle');
const {create,reply,update,remove,list} = require('../controller/comment.controller');

const commentRouter = new Router({prefix:'/comment'});

commentRouter.post('/',verifyAuth,create);
commentRouter.post('/replay',verifyAuth,reply);
commentRouter.patch('/:commentId',verifyAuth,verifyPermission,update);
commentRouter.delete('/:commentId',verifyAuth,verifyPermission,remove);
commentRouter.get('/',list);

module.exports = commentRouter;