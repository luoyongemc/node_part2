const crypto = require('crypto');

const md5password = (password) => {
    const md5 = crypto.createHash('md5');
    //此处的password必须为字符串，否则没响应也不报错
    const result = md5.update(password).digest('hex');//返回一个十六进制
    return result;
}

module.exports = md5password;