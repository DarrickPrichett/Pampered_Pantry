const User = require('./User');
const Recipe = require('./Recipe');

// create associations
// User.hasMany(Recipe, {
//     foreignKey: 'Recipe_Id'
//   });

module.exports = { User, Recipe };