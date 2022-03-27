const path = require('path');
const fs = require('fs');

const ejs = require('ejs');

const compile = (templateName,data) => {
    // console.log(data,'data');
    const templatePosition = `../templates/${templateName}`;
    const templatePath = path.resolve(__dirname,templatePosition);
    // console.log(templatePath);
    return new Promise((resolve,reject) => {
        ejs.renderFile(templatePath,{data},{},(err,result) => {
            if(err) {
                console.log(err);
                reject(err);
                return;
            }

            resolve(result);
        })
    })
}

//   source/components/category/why   判断有没有该文件夹，乜有则创建
const createDirSync = (pathName) => {
    if(fs.existsSync(pathName)) {
        return true;
    }else {
        if(createDirSync(path.dirname(pathName))) {
            fs.mkdirSync(pathName);
            return true;
        }
    }
}

const writeToFile = (path,content) => {
    //判断path是否存在，如果不存在，创建对应的文件夹
    // if(createDirSync(path)) {
        
    // }

    return fs.promises.writeFile(path,content);
    
}

module.exports = {
    compile,
    writeToFile,
    createDirSync
}