const { gql } = require('apollo-server-express');
// match recipe model 

const typeDefs = gql`
type Category {
    _id: ID
    name: String
  }

  type Recipe {
    _id: ID
    name: String
    description: String
    image: String
    category: Category
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    recipes(category: ID, name: String): [Recipe]
    recipe(_id: ID!): Recipe
    user: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateRecipe(_id: ID!, quantity: Int!): Recipe
    login(email: String!, password: String!): Auth
  }
  `;

module.exports = typeDefs;