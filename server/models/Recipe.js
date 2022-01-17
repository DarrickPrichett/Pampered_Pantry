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
    user_id: {
        type: Schema.Types.ObjectId,
        ref:  "User"
    },
    // steps: [],
    steps: {
        type: String,
        required: 'please add in steps!'
    },
    // ingredients: [],
    ingredients: {
        type: String,
        required: 'please add in ingredients!'
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
    },
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