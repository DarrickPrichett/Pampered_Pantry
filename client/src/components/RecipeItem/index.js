import React from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState"
// import { idbPromise } from "../../utils/helpers";

function RecipeItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    recipeName,
    _id,
    recipeText,
    steps,
    ingredients
  } = item;


  return (
    <div className="card px-1 py-1">
      <Link to={`/recipes/${_id}`}>
        <p>{recipeName}</p>
        <p>{recipeText}</p>
        <p>{ingredients}</p>
        <p>{steps}</p>
      </Link>
      <div>
        
      </div>
    </div>
  );
}

export default RecipeItem;
