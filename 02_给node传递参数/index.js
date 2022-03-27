// console.log(process.argv[2]);
// console.log(process.argv[3]);

const obj = {};

let _animal = 'cat';


// Object.defineProperty(obj,'animal',{
//     get() {
//         return _animal;
//     },
//     set(value) {
//         _animal = value;
//     },
//     enumerable:false,
//     configurable:true
// })

// obj['animal'] = 'cat';
obj.animal = 'cat';
console.log(obj,'obj');

console.log(obj.animal,111);
obj.animal = 'dog';
console.log(obj.animal,111);