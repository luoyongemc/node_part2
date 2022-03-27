const mysql = require('mysql2');

//1.创建连接池
const connection = mysql.createPool({
    host:'127.0.0.1',
    port:3306,
    database:'codehub',
    user:'root',
    password:'12345678',
    connectionLimit:10
});


const statement = `SELECT * FROM students where age > ?`;

//先预编译 再执行query  防止sql注入
connection.promise().execute(statement,[20]).then(([res]) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})