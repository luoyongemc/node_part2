const Router = require('koa-router');

const momentRouter = new Router({prefix:'/moment'});
const {create,detail,list,update,remove,addLabel,fileInfo} = require('../controller/moment.controller.js');
const {verifyAuth,verifyPermission} = require('../middleware/auth.middle');
const {verifyLabelExists} = require('../middleware/label.middleware');

momentRouter.post('/',verifyAuth,create);
momentRouter.get('/list',list);
momentRouter.get('/:momentId',detail);
momentRouter.patch('/:momentId',verifyAuth,verifyPermission,update);
momentRouter.delete('/:momentId',verifyAuth,verifyPermission,remove);
momentRouter.post('/:momentId/labels',verifyAuth,verifyPermission,verifyLabelExists,addLabel);
momentRouter.get('/images/:filename',fileInfo);

module.exports = momentRouter;