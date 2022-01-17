const db = require('./connection');
const { User, Recipe, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Main'},
    { name: 'Appetizer'},
    { name: 'Soup'},
    { name: 'Dessert'},
    { name: 'Sauce'},
    { name: 'Side'}
  ]);

  console.log('categories seeded');

  const recipes = await Recipes.insertMany([
    {
      recipeName: 'Tomato Pie',
      recipeText: 'Great for brunch, appetizer, or side dish',
      username: 'Dorcas',
      ingredients: ['1 9” unbaked pastry shell', '3 medium tomatoes, peeled and thickly sliced', '½ t salt', '¼ t pepper', '½ t basil', '¼ C chives', '¼ C mayonnaise', '1 ½ C grated sharp cheddar'],
      steps: 'Bake pastry shell at 425 degrees for 5 minutes. Reduce oven to 400 degrees. Cover bottom of crust with tomatoes. Sprinkle with spices and chives. Spread with cheese and mayonnaise, sealing edge carefully. Bake 35 minutes.',
      categories: ['Main'],
    },
    {
      recipeName: 'Marsha’s Famous Cheese ball',
      recipeText: 'This is a must-have appetizer for our family gatherings.',
      username: 'Terry',
      ingredients: ['2-8 oz pkgs cream cheese, softened', '1- 8 oz can crushed pineapple, well-drained', '2 T  green onion, finely chopped', '¼ c green pepper, finely chopped', '½ T seasoned salt', '1 c chopped pecans', 'additional ½ c chopped pecans to roll ball in'],
      steps: 'Mix all together & roll in ½ c chopped pecans. Chill',
      categories: ['Appetizer'],
    },
    {
      recipeName: 'Scalloped Corn',
      recipeText: 'A holiday tradition',
      username: 'Dorcas',
      ingredients: ['1 can creamed corn', '2 eggs beaten', '½ cup crushed saltine crackers', '6 drops Tabasco', '¼ c. milk', '¼ c. shredded carrot', '¼ c. chopped green pepper - can also add sweet red pepper', '1T. chopped onion', '½ C shredded cheddar cheese', 'paprika to sprinkle on top'],
      steps: 'Combine all ingredients except cheese & paprika. Mix and turn into greased 8x8x2” baking dish. Top with cheese and sprinkle with paprika. Bake at 350 degrees for 30 minutes or until top is golden brown.',
      categories: ['Side'],
    },
    {
      recipeName: 'Scalloped Corn',
      recipeText: 'A holiday tradition',
      username: 'Dorcas',
      ingredients: ['1 can creamed corn', '2 eggs beaten', '½ cup crushed saltine crackers', '6 drops Tabasco', '¼ c. milk', '¼ c. shredded carrot', '¼ c. chopped green pepper - can also add sweet red pepper', '1T. chopped onion', '½ C shredded cheddar cheese', 'paprika to sprinkle on top'],
      steps: 'Combine all ingredients except cheese & paprika. Mix and turn into greased 8x8x2” baking dish. Top with cheese and sprinkle with paprika. Bake at 350 degrees for 30 minutes or until top is golden brown.',
      categories: ['Side'],
    },
    {
      recipeName: 'French Onion Soup',
      recipeText: 'An Dorcas original and is truly delicious.',
      username: 'Dorcas',
      ingredients: ['4 medium sweet onions, thinly sliced', '4 T butter', '½ t salt', '½ t nutmeg', '1 t sugar', '2 soup cans beef bouillon (not broth)', '½ lb. grated Swiss cheese', '4 T parmesan cheese', '4 slices French bread, dried in oven till golden', '¼-1/2 c sherry'],
      steps: 'Saute onions in butter till soft & caramel-colored. Add seasonings & bouillon & bring to a boil; simmer 10 minutes. Add sherry & ladle into 4 ovenproof bowls. Top each with 1 T Swiss cheese, slice of French bread, remaining Swiss, & top with Parmesan. Bake 10 min. at 350 degrees, till bubbly and cheese has melted. Serve with additional Parmesan cheese.',
      categories: ['Soup'],
    },
    {
      recipeName: 'Caramel Brownies',
      recipeText: 'Simple yet decadent',
      username: 'Pat',
      ingredients: ['2 cups brown sugar, firmly packed', '½ cup plus 2 tablespoons salad oil', '2 eggs', '1 teaspoon vanilla', '1 cup flour', '2 teaspoons baking powder', '½ teaspoon salt', '1 cup pecans, chopped'],
      steps: 'Combine brown sugar, salad oil, vanilla and eggs. Add flour, baking powder & salt. Stir until smooth. Add chopped pecans.Pour batter into greased and floured 9x13 baking pan. Bake in 350 degree oven for 30 minutes. Cool; cut into squares. Yield: 32-36 1 ½ inch squares',
      categories: ['Dessert'],
    },
    {
      recipeName: 'Jezebel Sauce',
      recipeText: 'Corkys favorite - Hot!!',
      username: 'Dorcas',
      ingredients: ['1 6 oz. jar pineapple preserves', '1 6 oz. jar apple jelly', '1 small can dry mustard', '1 5 oz. jar horseradish', '1 T freshly-ground peppercorns'],
      steps: 'Mix together and serve over a block of cream cheese & eat with crackers, or as a tasty accompaniment to meats.',
      categories: ['Sauce'],
    },
  ]);

  console.log('recipes seeded');

// Users
await User.deleteMany();

await User.create({
  firstName: 'Pamela',
  lastName: 'Washington',
  email: 'pamela@testmail.com',
  password: 'password12345',
  orders: [
    {
      recipes: [recipes[0]._id, recipes[0]._id, recipes[1]._id]
    }
  ]
});

await User.create({
  firstName: 'Elijah',
  lastName: 'Holt',
  email: 'eholt@testmail.com',
  password: 'password12345'
});

console.log('users seeded');

process.exit();
});