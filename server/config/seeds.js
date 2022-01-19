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
    },
    {
      name: 'Golden Brownies',
      description: 'Simple yet decadent',
      category: categories[4]._id,
      steps: 'Preheat oven to 350 degrees. In small bowl, combine flour, baking powder, and salk; set aside. In large bowl,  combine butter, sugar, dark brown sugar, and vanilla; beat till creamy. Add eggs, beating well after each addition. Gradually add flour mixture; mix well. Stir in chocolate chips. Spread evenly into well-greased 15”x10”x1” baking pan. (jelly roll pan) Bake at 350 degrees for 30-35 minutes. Cut into 2” squares. Makes 35. ',
      ingredients: '2 C unsifted flour 2 t baking powder 1 t salt ¾ C butter, softened ¾ C sugar ¾ C firmly packed brown sugar 1 t vanilla 1 12 oz pkg (2 cups) chocolate chips '
    }, 
    {
      name: 'Heavenly Sole',
      description: 'Easy quick delicious',
      category: categories[3]._id,
      steps: 'Place fillets in a single layer on a well-greased bake and serve platter, 16x10 inches. Brush fillets with lemon juice and let stand for 10 minutes. Combine remaining ingredients. Broil fillets about 4 inches from source of heat for 6-8 minutes or until fillets flake easily with a fork. Remove from heat & spread with cheese mixture. Broil 2-3 minutes longer or until lightly browned. Makes 6 servings ',
      ingredients: '2 lbs. Sole, Snapper or other fillets 2 T lemon juice ½ C grated Parmesan cheese ¼ C butter, softened 3 T mayonnaise 3T chopped green onion ¼ t salt dash liquid hot pepper sauce'
    },    {
      name: 'Breakfast Brunch Dish',
      description: 'Make the night before and refrigerate',
      category: categories[0]._id,
      steps: 'Fry sausage into crumbles & drain. Dice links. Beat eggs & add rest of ingredients. Place in greased 8x10 pan overnight (or just refrigerate in bowl) Bake at 350 degrees for 45 minutes.  ',
      ingredients: '6 eggs 2 c milk 1 t salt 1 t dry mustard 1 lb mild pork sausage or pre-cooked sausage links (Jimmy Dean maple-flavored links!!) 1 c grated sharp cheddar cheese 4-5 slices bread, cubed'
    },
    {
      name: 'Mungo Salad',
      description: 'This makes a lot, but it disappears in a hurry. Great to take to pot-luck or picnic.',
      category: categories[2]._id,
      steps: 'Prepare lettuce & mix with Prosciutto or bacon, cheeses, & green onions. ½ hour before serving, toss with dressing & let stand at room temperature to let flavors develop. ',
      ingredients: '1 head iceberg lettuce 1 head Romaine lettuce tear lettuces into bite-sized pieces ¼-1/3 lb Provolone cheese, shredded 1/8 c Romano cheese, grated ¼ c Parmesan cheese, grated ¼ lb Prosciutto ham, chopped & sautéed (we prefer crisp bacon –use 1 lb & crumble) 1 bunch green onions or scallions, chopped 1 pkg Good Seasons Italian dressing mix, prepared as directed EXCEPT use olive oil—only ½ c (less than mix calls for), use white wine vinegar & add 2 T sugar. Prepare & refrigerate.'
    },
    {
      name: 'Crustless Spinach Quiche',
      description: 'This is like Stouffers’ Spinach Quiche',
      category: categories[1]._id,
      steps: 'Preheat oven to 350 degrees. Butter 9: pie plate. Heat oil in skillet over medium heat. Add onion and sauté until wited. Add spinach; cook until excess moisture is evaporated. Let cool. Beat eggs in bowl, add cheese. Stir into spinach mixture and season to taste with salt and pepper. Turn into pie plate, spreading evenly. Bake until top is nicely browned and tester comes out clean—40-50 minutes. 6 servings',
      ingredients: '1 T oil 1 large onion, chopped 10 oz. pkg. frozen spinach, thawed and squeezed to remove as much moisture as possible. 5 eggs ¾ lb. Swiss or Muenster cheese, grated Salt and freshly ground pepper'
    },
    {
      name: 'Milky Way Wonder Cake',
      description: 'A family favorite',
      category: categories[4]._id,
      steps: 'Melt ½ C butter and candy bars on slow heat. Beat remaining ½ C butter, eggs, and sugar. Beat well. Add flour &  baking soda alternately with buttermilk until smooth. Add candy mixture and mix well. Stir in nuts and vanilla. Pour into well-greased and floured tube pan and bake at 350 degrees for 1 hour and 20 minutes. ',
      ingredients: '6 Milky Way bars 1 C butter 4 eggs 2 ½ C sifted flour ½ t baking soda 2 C sugar 1 ¼ C buttermilk 1 t vanilla 1 C chopped nuts       '
    },
    {
      name: 'Sour Cream Chocolate Chip Cake',
      description: 'So tasty.',
      category: categories[4]._id,
      steps: 'Blend butter with 1 C sugar, then beat in eggs one at a time. Mix flour, baking powder, soda & cinnamon, then blend into creamed mixture. Add sour cream.Pour batter into greased and floured 9”x13” pan. Scatter chocolate chips evenly over batter, then sprinkle with the remaining 1 T of sugar. Bake in 350 degree oven for 35 minutes, or till cake just begins to pull away from pan. Do not refrigerate. ',
      ingredients: '6T soft butter 1 C plus 1 T sugar 2 eggs 1 ½ C flour 1 ½ t baking powder 1 t baking soda 1 t cinnamon 1 C sour cream 1 pkg. (6 oz.) chocolate chips   '
    },
    {
      name: 'French Market Soup',
      description: 'Hearty and warming on a cold day. This makes a striking gift!',
      category: categories[2]._id,
      steps: 'Wash beans & soak overnight in water at least 2 inches over top of the beans. Drain beans; add 2 qts. Water, ham & hock, salt and pepper. Cover and bring to a boil; reduce heat & simmer 1 ½ hours or till beans are tender. Add remaining ingredients; simmer 30 minutes, stirring occasionally. Makes 6 servings. This makes a striking gift. Layer several colorful varieties of beans and lentils in a pint canning jar, put on lid tightly, and attach copy of the recipe with twine, yarn, raffia, etc. Cover the lid with cloth if you wish. To make it look even more interesting, hold the jar at an angle when you layer in the beans, so the finished jar shows angles of colors and textures.',
      ingredients: '2 C French Market soup mix ( 2 C assorted dried beans) 2 quarts water 1 ham hock 1 lb. ham, diced (optional) 1 lb. ham, diced (optional) 2 large ribs celery, chopped fine 1 16 oz. can tomatoes, chopped 1 10 oz. can Rotel tomatoes, chopped 1 clove garlic, minced½ t salt (or to taste) ¼ t pepper 2 t ham soup base, if desired'
    },
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