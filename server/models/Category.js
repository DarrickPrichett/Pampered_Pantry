const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Please enter required information.'
    },
    image: {
        type: String,
        required: 'Please enter required field.'
    },
});

module.exports = mongoose.model('Category', categorySchema);