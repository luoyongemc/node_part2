const http = require('http');
const fs = require('fs');
const qs = require('querystring');

const server = http.createServer((req, res) => {
    if (req.url === '/upload') {
        if (req.method === 'POST') {

            //图片文件必须设置为二进制
            req.setEncoding('binary');

            let body = '';
            const boundary = req.headers['content-type'].split(';')[1].replace(' boundary=', '');
            // console.log(boundary, 'boundary');
            // const fileWriter = fs.createWriteStream('./foo.png', { flags: 'a+' });

            req.on('data', (data) => {
                console.log(data);
                body += data;
                // fileWriter.write(data)
            });

            req.on('end', () => {
                // console.log('文件上传成功');
                console.log(body);
                //1.获取image/png的位置
                const payload = qs.parse(body, "\r\n", ": ");
                const type = payload["Content-Type"];
                // console.log(payload["Content-Type"], 111);

                //2.开始在imag.png的位置进行截取
                const typeIndex = body.indexOf(type);
                const typeLength = type.length;
                let imageData = body.substring(typeIndex + typeLength);

                //3.将中间的两个空格去掉
                imageData = imageData.replace(/^\s\s*/, '');

                //4.将最后boundary去除
                imageData = imageData.substring(0, imageData.indexOf(`--${boundary}--`))
                fs.writeFile('./foo.jpeg', imageData, 'binary', (err) => {
                    console.log('file upload ok');
                    res.end('文件上传成功');
                });

            })
        }
    }
})

server.listen(8888, () => {
    console.log('server start');
})