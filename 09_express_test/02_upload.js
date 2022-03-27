const path = require('path');

const express = require('express');
const multer = require('multer');

//express其实是一个函数：createApplication
//返回app
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,'./uploads/');
    },
    filename:(req,file,cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null,uniqueSuffix + path.extname(file.originalname));
    }
})


const upload = multer({
    // dest:'./uploads/'
    storage
});

// app.use(upload.any());

app.post('/login',upload.any(), (req, res, next) => {
    console.log(req.body);
    res.end('用户登录成功');
});

app.post('/upload',upload.single('file'),(req,res,next) => {
    res.end('file upload success');
})


//开启监听
app.listen(8000, () => {
    console.log('express init111');
})