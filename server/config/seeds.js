const db = require("./connection");
const { User, Recipe, Category } = require("../models");

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Breakfast' },
    { name: 'Brunch' },
    { name: 'Lunch' },
    { name: 'Dinner' },
    { name: 'Deserts' },
  ]);

  console.log('categories seeded');

  await Recipe.deleteMany();

  const recipes = await Recipe.insertMany([
    {
      name: 'Cream of Wheat',
      description: 'The best tasting breakfast food.',
      category: categories[0]._id,
      steps: 'Put items in a bowl',
      ingredients: 'cream of wheat, milk, maple syrup'
    },
    {
      name: 'PBJ',
      description: 'The go to Lunch.',
      category: categories[2]._id,
      steps: '123123',
      ingredients: '123123'
    },
    {
      name: 'Brussel Sprouts',
      description: 'So tasty.',
      category: categories[3]._id,
      steps: 'Brussel sprouts in tasty food out',
      ingredients: 'All the sprouts'
    },
    {
      name: 'Tomato Pie',
      description: 'Great for brunch, appetizer, or side dish',
      category: categories[1]._id,
      steps: 'Bake pastry shell at 425 degrees for 5 minutes. Reduce oven to 400 degrees. Cover bottom of crust with tomatoes. Sprinkle with spices and chives. Spread with cheese and mayonnaise, sealing edge carefully. Bake 35 minutes',
      ingredients: '1 9” unbaked pastry shell 3 medium tomatoes, peeled and thickly sliced ½ t salt ¼ t pepper ½ t basil ¼ C chives ¼ C mayonnaise 1 ½ C grated sharp cheddar'
    },
    {
      name: 'Spicy Tomato Soup from Elsah Landing',
      description: 'Hearty and warming',
      category: categories[3]._id,
      steps: 'Combine all ingredients in large pot. Crush tomatoes with potato masher. Cover & simmer at least 30 minutes. Garnish each serving with pat of butter if desired.',
      ingredients: '8 c chicken broth (or 3 T chicken stock base in 8 c. water) 2 large cans (28 oz each) tomatoes or 4- 1 lb cans 1 8 oz can tomato sauce 4 onion bouillon cubes 2 T minced dried onions 4 T dried parsley 4 bay leaves 2 t basil 2 t paprika 2 t sugar ½ t ground cloves ½ t nutmeg ½ t pepper'
    }
  ]);

  console.log('Recipes seeded');

await User.deleteMany();

await User.create({
  firstName: "Pamela",
  lastName: "Washington",
  email: "pamela@testmail.com",
  password: "password12345"
});

await User.create({
  firstName: "Elijah",
  lastName: "Holt",
  email: "eholt@testmail.com",
  password: "password12345"
});

console.log("users seeded");

process.exit();
});