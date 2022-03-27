#!/usr/bin/env node

// console.log('why cli');
const {program} = require('commander');
const helpOptions = require('./lib/core/help');
const createCommands = require('./lib/core/create')

program.version(require('./package.json').version,'-v, --version');

//可选信息
helpOptions();

//创建其它指令
createCommands();

program.parse(process.argv);

// console.log(program.opts().dest);