/**
 * 执行终端相关命令的代码
 */

const {spawn} = require('child_process');

const commandSpawn = (...args) => {
    return new Promise((resolve,reject) => {
        const childProcess = spawn(...args);
        childProcess.stdout.pipe(process.stdout);//将子进程执行中的打印信息输出到终端进程中去
        childProcess.stderr.pipe(process.stderr);
        childProcess.on('close',() => {
            resolve();
        })
    })
}

module.exports = {
    commandSpawn
}