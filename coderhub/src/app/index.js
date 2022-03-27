const Koa = require('koa');
const bodyparser = require('koa-bodyparser');

const useRoutes = require('../router');
const errorHandler = require('./err_handler');

const app = new Koa();

app.use(bodyparser());
useRoutes(app);
app.on('error',errorHandler);

module.exports = app;