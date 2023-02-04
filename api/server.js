const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;

const userRouter = require('./routers/usersRouter');


app.use('/users', userRouter)

// connect to database 
mongoose.connect('mongodb+srv://member:member123@cluster.cmlunqp.mongodb.net/cafeDB', (err) => {
    if (err) console.log(err, "can't connect to database");
    console.log('database connected sucessfully');
});

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})