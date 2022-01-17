const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipeSchema = new Schema({
    recipeName: {
        type: String,
        required: 'Please enter a recipe name'
    },
    recipeText: { // recipe description 
        type: String,
        required: 'Please enter recipe description!'
    },
    username: {
        type: String,
        required: true
    },
    // ingredients: [],
    ingredients: {
        type: Array,
        required: 'please add in ingredients!'
    },
    steps: {
        type: String,
        required: 'please add in steps!'
    },
    categories: {
        type: Array,
        enum: ['Main', 'Appetizers','Soup', 'Desserts','Sauce','Sides'],
        required: 'Please include required field.'
    },
    // image: {
    //     type: String,
    //     required: 'Please include and image.'
    // },
    // createdAt: {
    //     type: Date,
    //     default: Date.now,
    //     get: timestamp => dateFormat(timestamp)
    // },
    //     reactions: [reactionSchema]
},
    {
        toJSON: {
            getters: true
        }
    }
);

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;