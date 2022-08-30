const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    "name": String,
    "email": String,
    "password": String,
    "date": String
})

let userModel = mongoose.model('user', userSchema);
module.exports = userModel;

