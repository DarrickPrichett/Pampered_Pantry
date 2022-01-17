import { gql } from "@apollo/client";
//adust file later when models are set
export const QUERY_RECIPES = gql`
  query getRecipes($category: ID) {
    recipes(category: $category) {
      _id
      name
      description
      username
      steps
      ingredients
      category

      category {
        _id
      }
    }
  }
`;

export const QUERY_ALL_RECIPES = gql`
  {
    recipes {
      _id
      name
      description

      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      recipes {
        _id
        name
        description
        steps
        ingredients
        createdAt
      }
    }
  }
`;
