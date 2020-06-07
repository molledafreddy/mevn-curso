const express = require('express');
const morgan = require('morgan');

const app = express();
// const { mongoose } = require('./database');

//settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/tasks', require('./routes/tasks'));
// app.use('/api/tasks',require('./routes/task.routes'))

//Static files
app.use(express.static(__dirname + '/public'));

//server ins listening
app.listen(app.get('port'), () =>{
    // console.log('server on port ', app.get('port'));
    
    const mongoose = require('mongoose');
    const URI = 'mongodb+srv://molledafreddy:freddy2..@cluster0-1e16p.mongodb.net/prueba?retryWrites=true&w=majority'
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
        })
        .then(db => console.log('DB is connected'))
        .catch(err => console.error(err));


});