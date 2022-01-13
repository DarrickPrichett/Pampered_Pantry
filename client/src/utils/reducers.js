import { useReducer } from "react";
import { // update with recipe actions
  UPDATE_RECIPES,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_RECIPES:
      return {
        ...state,
        recipes: [...action.recipes],
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory
      }

    default:
      return state;
  }
};

export function useRecipeReducer(initialState) {
  return useReducer(reducer, initialState)
}