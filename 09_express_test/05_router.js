const express = require('express');
const userRouter = require('./ruoters/user');

const app = express();

app.use('/users',userRouter);




app.listen(8000, () => {
    console.log('express init05');
})