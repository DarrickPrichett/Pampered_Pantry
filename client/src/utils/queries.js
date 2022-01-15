import { gql } from '@apollo/client';
//adust file later when models are set
export const QUERY_RECIPES = gql`
  query getProducts($category: ID) {
    recipes(category: $category) {
      _id
      name
      description
      quantity
      image
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
      quantity
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
      orders {
        _id
        purchaseDate
        recipes {
          _id
          name
          description
          quantity
          image
        }
      }
    }
  }
`;