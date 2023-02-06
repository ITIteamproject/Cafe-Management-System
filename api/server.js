const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;

const userRouter = require('./routers/usersRouter');

app.use('/users', userRouter)

// error middleware
app.use((err, req, res, next) => {
    if(!err.statusCode) err.message = 'something went wrong'
    res.status(err.statusCode || 500).send(err.message)
})

// connect to database 
// mongo atlas url-> mongodb+srv://member:member123@cluster.cmlunqp.mongodb.net/cafeDB
mongoose.connect('mongodb://127.0.0.1:27017/cafeDemo', (err) => {
    if (err) console.log(err, "can't connect to database");
    console.log('connected to db successfully');
});

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})