const http = require('http');
const url = require('url');
const qs = require('querystring');


//创建一个web服务器
const server = http.createServer((req, res) => {

    // const {pathname,query} = url.parse(req.url);// req.url = /login?useename=luoyong&password=123
    // if(pathname === '/login') {
    //     const {username,password} = qs.parse(query);  //query = useename=luoyong&password=123
    //     console.log(pathname,username,password);
    // }

    // if(req.method === 'POST') {
    //     req.setEncoding('utf-8');//如果是图片和音视频，设为binary
    //     req.on('data',(data) => {
    //         const {username,password} = JSON.parse(data);
    //     })
    // }

    res.end('hello world');
});

server.listen(8888, '127.0.0.1', () => {
    console.log('服务器启动成功');
})