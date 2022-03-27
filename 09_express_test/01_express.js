const express = require('express');

//express其实是一个函数：createApplication
//返回app
const app = express();

//普通中间件
app.use((req, res, next) => {
    req.on('data', (data) => {
        req.body = JSON.parse(data.toString());
    })

    req.on('end', () => {
        next()
    })
    console.log('common middleware');
    next();
})

/**
 * extended:
 *  true:对urlencoded进行解析时，使用的是第三方库：qs
 *  false:对urlencoded进行解析时，使用的是Node内置模块：querystring
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//路径匹配中间件
app.use('/home', (req, res, next) => {
    console.log('home middleware');
})

//监听默认路径  路径和方法匹配的中间件
app.get('/', (req, res, next) => {
    res.end('hello express');
});

//开启监听
app.listen(8000, () => {
    console.log('express init');
})