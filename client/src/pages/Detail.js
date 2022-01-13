import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { useStoreContext } from '../utils/GlobalState';
import {
  
  UPDATE_RECIPES
} from '../utils/actions';
import { QUERY_RECIPES } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentRecipe, setCurrentRecipe] = useState({});

  const { loading, data } = useQuery(QUERY_RECIPES);

  const { recipes } = state;

  useEffect(() => {
    // already in global store
    if (recipes.length) {
      setCurrentRecipe(recipes.find((product) => product._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_RECIPES,
        recipes: data.recipes,
      });

      data.recipes.forEach((product) => {
        idbPromise('recipes', 'put', product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('recipes', 'get').then((indexedRecipes) => {
        dispatch({
          type: UPDATE_RECIPES,
          recipes: indexedRecipes,
        });
      });
    }
  }, [recipes, data, loading, dispatch, id]);



  return (
    <>
      {currentRecipe ? (
        <div className="container my-1">
          <Link to="/">← Back to Recipes</Link>

          <h2>{currentRecipe.name}</h2>

          <p>{currentRecipe.description}</p>

          <img
            src={`/images/${currentRecipe.image}`}
            alt={currentRecipe.name}
          />
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}

    </>
  );
}

export default Detail;
