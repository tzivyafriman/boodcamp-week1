//בעבור כל טבלה וטבלה, עם השדות מתואמים בדיוק למונגו
const mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
    "id": Number,
    "name": String,
    "price": Number,
    "description": String
})

let productModel = mongoose.model('product', productSchema);
module.exports = productModel;