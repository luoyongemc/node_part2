const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('codehub','root','12345678',{
    host:'127.0.0.1',
    dialect:'mysql'
});

sequelize.authenticate().then(() => {
    console.log('connect database success');
}).catch((err) => {
    console.log(err);
})