const Router = require('koa-router');

const authRouter = new Router();

const {verifyLogin,verifyAuth} = require('../middleware/auth.middle');

const {login,success} = require('../controller/auth.controller.js');

authRouter.post('/login',verifyLogin,login);
authRouter.get('/test',verifyAuth,success);

module.exports = authRouter;