const path = require('path');
const {promisify} = require('util');
const download =  promisify(require('download-git-repo')) ;
const open = require('open');

const {vueRepo} = require('../config/repo-config');
const {commandSpawn} = require('../utils/terminal');
const {compile,writeToFile,createDirSync} = require('../utils/utils');

//callback --> promisify(函数) --> Promise --> async await
const createProjectAction = async(project) => {
    console.log('why helps you create your project');
    //1. 克隆项目
    await download(vueRepo,project,{clone:true});
    //2.执行npm install
    const command = process.platform === 'win32' ? 'npm.cmd' : 'npm';
    await commandSpawn(command,['install'],{cwd:`./${project}`});
    //3.运行npm run serve
    commandSpawn(command,['run','serve'],{cwd:`./${project}`});
    //4.打开浏览器
    open('http://localhost:8080/');
}

const addCpnAction = async(name,dest) => {
    //1.有对应得ejs模板
    //2.编译ejs模板 result
    const data = {name,lowerName:name.toLowerCase()}
    const res =await compile('vue-component.ejs',data);
    console.log(res,'res');

    //3.将result放入到.vue文件中
    const targetPath = path.resolve(dest,`${name}.vue`);
    console.log(targetPath);
    writeToFile(targetPath,res);
    //4.放到对应的文件夹中
}

//添加组件和路由
const addPageAndRouteAction = async (name,paramDest) => {
    //1.编译ejs模板
    const data = {name,lowerName:name.toLowerCase()};
    const pageRes = await compile('vue-component.ejs',data);
    const routeRes = await compile('vue-router.ejs',data);
    //3.写入文件
    const dest = path.resolve(paramDest,name.toLowerCase());
    if(createDirSync(dest)) {
        const targetPagePath = path.resolve(dest,`${name}.vue`);
        const targetRoutePath = path.resolve(dest,'router.js');
        writeToFile(targetPagePath,pageRes);
        writeToFile(targetRoutePath,routeRes);
    }
    
}

const addStoreAction = async (name,paramDest) => {
    //1.编译ejs模板
    const storeRes = await compile('vue-store.ejs',{});
    const typesRes = await compile('vue-types.ejs',{});
    //3.写入文件
    const dest = path.resolve(paramDest,name.toLowerCase());
    if(createDirSync(dest)) {
        const targetPagePath = path.resolve(dest,`${name}.js`);
        const targetRoutePath = path.resolve(dest,'types.js');
        writeToFile(targetPagePath,storeRes);
        writeToFile(targetRoutePath,typesRes);
    }
}

module.exports = {
    createProjectAction,
    addCpnAction,
    addPageAndRouteAction,
    addStoreAction
}