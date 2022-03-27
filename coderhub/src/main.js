const app = require('./app');
const config = require('./app/config');
// const connection = require('../src/app/database');


app.listen(config.APP_PORT,() => {
    console.log('hello world111');
})