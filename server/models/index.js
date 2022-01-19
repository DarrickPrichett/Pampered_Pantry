const User = require("./User");
const Recipe = require("./Recipe");
const Category = require("./Category");

// create associations
// User.hasMany(Recipe, {
//     foreignKey: 'Recipe_Id'
//   });

module.exports = { User, Recipe, Category };
