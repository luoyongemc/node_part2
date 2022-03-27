const errorType = require('../constant/error-types');
const service = require('../service/user.service');
const md5password = require('../utils/password-handle');

const verifyUser = async(ctx,next) => {
    const {name,password} = ctx.request.body;

    //判断用户名或者密码不能为空
    if(!name || !password) {
        const error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED);
        return ctx.app.emit('error',error,ctx);
    }

    //判断用户是否已经注册
    const res = await service.getUserByName(name);
    if(res.length) {
        const error = new Error(errorType.USER_ALREADY_EXISTS);
        return ctx.app.emit('error',error,ctx);
    }

    await next();
}

const handlePassword = async (ctx,next) => {
    const {password} = ctx.request.body;
    ctx.request.body.password = md5password(password);

    await next();
}

module.exports = {
    verifyUser,
    handlePassword
}