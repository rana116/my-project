const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {type:String, required: true},
    author: {type:String, required: true},
    genre: {type: String, required: true},
    description: {stype: String},
    price: {type:Number, required: true},
    imageURL: {type: String},
});

module.exports = mongoose.model('Book', bookSchema);
