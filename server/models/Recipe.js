const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipeSchema = new Schema({

});

//ingredients

//steps

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;