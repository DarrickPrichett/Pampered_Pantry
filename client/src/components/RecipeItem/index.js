import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { idbPromise } from "../../utils/helpers";

function RecipeItem(item) {
  const [state, dispatch] = useStoreContext();

  const { name, _id } = item;

  return (
    <div className='card px-1 py-1'>
      <Link to={`/recipes/${_id}`}>
        <img alt={name} />
        <p>{name}</p>
      </Link>
    </div>
  );
}

export default RecipeItem;
