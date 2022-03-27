const name = 'why';
const age = 18;
const sayHello = function (name) {
    console.log("你好" + name);
}

//导出方式1
// export const name = 'why';
// export const age = 18;
// export const sayHello = function (name) {
//     console.log("你好" + name);
// }


//方式2：{}中统一导出
// {}不是一个对象
// {放置要导出的变量的引用列表}
export {
    name,
    age,
    sayHello
}

//方式3：{}导出时，可以给变量起别名
// export {
//     name as fName,
//     age as fAge,
//     sayHello as sayHello1
// }


//默认导出   在一个模块中，只能有一个默认导出
export default function() {
    console.log(111);
}


//演练： import()函数
let flag = true;
if(flag) {
    /**
     * require()本质是一个函数
     * 如果是webpack的环境下，模块化打包工具支持：es commonJs
     */
    //纯ES Module环境下：import()
    import('./modules/foo.js').then((res) => {
        console.log(res.name);
        console.log(res.age);
    }).catch((err) => {
        console.log(err);
    })
}


const buf = Buffer.from('hello');