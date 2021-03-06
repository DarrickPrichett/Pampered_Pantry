import React, { useEffect } from "react";
import RecipeItem from "../RecipeItem";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_RECIPES } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_RECIPES } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import Skeleton from "@mui/material/Skeleton";

function RecipeList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;
console.log(currentCategory);
  const { loading, data } = useQuery(QUERY_RECIPES, {
    variables: { category: currentCategory}
  });

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_RECIPES,
        recipes: data.recipes,
      });
      data.recipes.forEach((recipe) => {
        idbPromise("recipes", "put", recipe);
      });
    } else if (!loading) {
      idbPromise("recipes", "get").then((recipes) => {
        dispatch({
          type: UPDATE_RECIPES,
          recipes: recipes,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterRecipes() {
    if (!currentCategory) {
      return state.recipes;
    }

    return state.recipes.filter(
      (recipe) => recipe.category._id === currentCategory
    );
  }

  return (
    <>
          <h2>Our Recipes:</h2>
      {state.recipes.length ? (
        <div className='flex-row'>
          {filterRecipes().map((recipe) => (
            <RecipeItem
              key={recipe._id}
              _id={recipe._id}
              //  image={recipe.image}
              name={recipe.name}
            />
          ))}
        </div>
      ) : (
        <h3>No Recipes have been added yet!</h3>
      )}
      {loading ? <Skeleton variant="rectangular"/> : null}
    </>
  );
}

export default RecipeList;
