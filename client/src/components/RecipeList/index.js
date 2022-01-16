import React, { useEffect } from 'react';
import RecipeItem from '../RecipeItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_RECIPES } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_RECIPES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner2.gif';

function RecipeList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_RECIPES);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_RECIPES,
        recipes: data.recipes,
      });
      data.recipes.forEach((recipe) => {
        idbPromise('recipes', 'put', recipe);
      });
    } else if (!loading) {
      idbPromise('recipes', 'get').then((recipes) => {
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
    <div className="my-2">
      <h2>Our Recipes:</h2>
      {state.recipes.length ? (
        <div className="flex-row">
          {filterRecipes().map((recipe) => (
            <RecipeItem
              key={recipe._id}
              _id={recipe._id}
              image={recipe.image}
              name={recipe.name}
              price={recipe.price}
              quantity={recipe.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any recipes yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default RecipeList;
