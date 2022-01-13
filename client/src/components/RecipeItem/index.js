import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState"
import { idbPromise } from "../../utils/helpers";

function RecipeItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    quantity
  } = item;


  return (
    <div className="card px-1 py-1">
      <Link to={`/recipes/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
      <div>
        <div>{quantity} {pluralize("item", quantity)} in stock</div>
        
      </div>
    </div>
  );
}

export default RecipeItem;
