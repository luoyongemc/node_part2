const mysql = require('mysql2');

//1.创建连接
const connection = mysql.createConnection({
    host:'127.0.0.1',
    port:3306,
    database:'codehub',
    user:'root',
    password:'12345678'
});

//执行sql语句
// const statement = `SELECT * FROM students`;

// connection.query(statement,(err,res,fields) => {
//     console.log(res);
//     connection.end();
// })




const statement = `SELECT * FROM students where age > ?`;

//先预编译 再执行query  防止sql注入
connection.execute(statement,[20],(err,res,fields) => {
    console.log(res);
    connection.end();
})