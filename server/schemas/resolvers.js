const { AuthenticationError } = require("apollo-server-express");
const { User, Recipe, Category } = require("../models"); // add other models
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    recipes: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Recipe.find(params).populate("category");
    },
    recipe: async (parent, { _id }) => {
      return await Recipe.findById(_id).populate("category");
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "recipes",
          populate: "category",
        });

        user.recipes.sort((a, b) => b.createdAt - a.createdAt);

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    addRecipe: async (parent, args) => {
      console.log(args)
    
      console.log("adding success");
      console.log(args);
      const recipe = await Recipe.create(args);
      console.log(recipe);
     // await User.findByIdAndUpdate(context.user._id, { $push: { recipes: recipe } });
      return recipe._id;
      // const token = signToken(user)
    
      //return { recipe };
    },
    updateRecipe: async (parent, { _id }) => {
      return await Recipe.findByIdAndUpdate(
        _id,

        { new: true }
      );
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
