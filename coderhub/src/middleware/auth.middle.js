const jwt = require('jsonwebtoken');

const errorType = require('../constant/error-types');
const userService = require('../service/user.service');
const authService = require('../service/auth.service');
const md5password = require('../utils/password-handle');
const {PUBLIC_KEY} = require('../app/config');

const verifyLogin = async (ctx,next) => {
    const {name,password} = ctx.request.body;
    //1.判断用户名和密码是否为空
    //判断用户名或者密码不能为空
    if(!name || !password) {
        const error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED);
        return ctx.app.emit('error',error,ctx);
    }

    //2.判断用户名是否存在
    const res = await userService.getUserByName(name);
    const user = res[0];
    if(!user) {
        const error = new Error(errorType.USER_DOES_NOT_EXISTS);
        return ctx.app.emit('error',error,ctx);
    }

    //3.判断密码是否和数据库中的一致  加密
    if(md5password(password) !== user.password) {
        const error = new Error(errorType.PASSWORD_IS_INCORRENT);
        return ctx.app.emit('error',error,ctx);
    }
    ctx.user = user;
    await next();
}

const verifyAuth = async (ctx,next) => {
    console.log('验证授权的middleware');

    //获取token
    const authorization = ctx.headers.authorization;
    console.log(authorization,111);
    if(!authorization) {
        const error = new Error(errorType.UNAUTHORIZATION);
        return ctx.app.emit('error',error,ctx);
    }
    const token = authorization.replace('Bearer ','');

    //验证token
    try {
        //id name iat...
        const result = jwt.verify(token,PUBLIC_KEY,{
            algorithms:["RS256"]
        });
        console.log(result);
        ctx.user = result;
        await next();
    } catch (err) {
        const error = new Error(errorType.UNAUTHORIZATION)
        ctx.app.emit('error',error,ctx);
    }

}


const verifyPermission = async (ctx,next) => {
    console.log('验证权限的middleware');

    //获取参数
    // const {momentId} = ctx.params;  commentId  momentId
    const [resourceKey] = Object.keys(ctx.params);
    const tableName = resourceKey.replace('Id','');
    const resourceId = ctx.params[resourceKey];

    const {id} = ctx.user;

    //查询是否具备权限
    const isPermission = await authService.checkPermission(tableName,resourceId,id);
    if(!isPermission) {
        const error = new Error(errorType.UNPERMISSION);
        return ctx.app.emit('error',error,ctx);
    }
    await next();
}

module.exports = {
    verifyLogin,
    verifyAuth,
    verifyPermission
}