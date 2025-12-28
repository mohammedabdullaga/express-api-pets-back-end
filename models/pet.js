const mongoose = require('mongoose');
const petSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        min: 0,
        require: true,
    },
    breed: String,
})

const pet = mongoose.model('pet', petSchema);

module.exports = pet