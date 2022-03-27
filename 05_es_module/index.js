//1.import {} from ''路径
// import {name,age,sayHello} from './modules/foo.js';

//2.导入变量之后可以起别名
// import {name as Name,age as Age,sayHello as SayHello} from './modules/foo.js';

//方式3：* as foo
import * as foo from './modules/foo.js';

console.log(foo.name);
console.log(foo.age);
foo.sayHello('xiao luo');

// console.log('hello es module');

//演练：default export如何导入
import format from './modules/foo.js';
format();