
const mongoose = require('mongoose')
const URI = 'mongodb+srv://molledafreddy:freddy2..@cluster0-1e16p.mongodb.net/prueba?retryWrites=true&w=majority'
mongoose.connect(URI,{
    useNewUrlParser: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
    })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))

module.exports = mongoose