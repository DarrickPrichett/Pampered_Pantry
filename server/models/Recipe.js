const mongoose = require("mongoose");

const { Schema } = mongoose;

const recipeSchema = new Schema({
  name: {
    type: String,
    required: "Please enter a recipe name",
  },
  description: {
    // recipe description
    type: String,
    required: "Please enter recipe description!",
  },
  username: {
    type: String,
  },
  // steps: [],
  steps: {
    type: String,
    required: "please add in steps!",
  },
  // ingredients: [],
  ingredients: {
    type: String,
    required: "please add in ingredients!",
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});


const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
