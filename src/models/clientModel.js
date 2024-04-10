const mongoose = require('mongoose')

const clientsSchema= new mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
    gender: String,
    age: Number  
});

const Client= mongoose.model('clientes', clientsSchema);

module.exports = Client;