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