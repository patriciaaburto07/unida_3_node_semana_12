const express = require('express');
const logger = require ('./middleware/logger');
const userRouter = require('./routes/users');
const app = express();


//middlewares globales
app.use('/users' , userRouter);

app.listen(3000,
    () => {
        console.log ('hola')
    }
);