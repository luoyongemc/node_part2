const Router = require('koa-router');
const Multer = require('koa-multer');
const { verifyAuth } = require('../middleware/auth.middle');
const {avatarHandler,pictureHandler,pictureResize} = require('../middleware/file.middleware');
const {saveAvatarInfo,savePictureInfo} = require('../controller/file.controller');

const fileRouter = new Router({prefix:'/upload'});

fileRouter.post('/avatar',verifyAuth,avatarHandler,saveAvatarInfo);
fileRouter.post('/picture',verifyAuth,pictureHandler,pictureResize,savePictureInfo);

module.exports = fileRouter;