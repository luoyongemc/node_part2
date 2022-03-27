const http = require('http');

//http发送get请求
// http.get('http://127.0.0.1:8888', res => {
// //获取数据
// res.on('data', (data) => {
//         console.log(data.toString());
//     })
//     //监听获取数据结束
// res.on('end', () => {
//     console.log('获取到了所有结果');
// })
// })

const req = http.request({
    method: 'POST',
    hostname: '127.0.0.1',
    port: '8888'
}, (res) => {
    //获取数据
    res.on('data', (data) => {
            console.log(data.toString());
        })
        //监听获取数据结束
    res.on('end', () => {
        console.log('获取到了所有结果');
    })
});

req.end();