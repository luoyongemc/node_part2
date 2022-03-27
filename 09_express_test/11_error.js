const express = require('express');

const app = express();

const USERNAME_ALREADY_EXISTS = "USERNAME_ALREADY_EXISTS";


app.post('/register',(req,res,next) => {
    const isExists = false;
    if(isExists) {
        res.end('user login success');
    }else {
        next(new Error(USERNAME_ALREADY_EXISTS));
    }
})

app.use((err,req,res,next) => {
    const status = 400;
    let message = "";

    switch(err.message) {
        case USERNAME_ALREADY_EXISTS:
            message = 'username already exists';
            break;
        default:
            message = 'NOT FOUND'
    }

    res.status(status);
    res.json({
        errCode:status,
        errMessage:message
    })
})

app.listen(8000,() => {
    console.log('静态资源服务器启动成功');
})