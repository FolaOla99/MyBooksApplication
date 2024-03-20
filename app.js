const express = require('express');
const mongoose = require('mongoose');
const app = express();
URL = 'mongodb://localhost/Books'

mongoose.connect(URL,{useNewUrlParser: true});
const con = mongoose.connection;

con.on('open',()=>{
    console.log('Connection to the database successful!')
})

app.use(express.json())

const booksRouter = require('./Routers/bookRT');
app.use('/books',booksRouter);

app.listen(9800,() => {
    console.log('Connection to server successful!')
})  