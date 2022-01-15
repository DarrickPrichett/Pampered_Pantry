const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipeSchema = new Schema({
    recipeText: {
        type: String,
        required: 'Please enter recipe text!'
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
    },
    username: {
        type: String,
        required: true
    }
    //     reactions: [reactionSchema]
},
    {
        toJSON: {
            getters: true
        }
    }
);

//ingredients

//steps

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;