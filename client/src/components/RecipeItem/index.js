import React from "react";
//import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { idbPromise } from "../../utils/helpers";
import Link from "@mui/material/Link";
function RecipeItem(item) {
  const [state, dispatch] = useStoreContext();

  const { name, _id } = item;

  return (
    <div className='card px-1 py-1'>
      <Link
      color="error"
      underline="none"
      href={`/recipes/${_id}`}>
        <p>{name}</p>
      </Link>
    </div>
  );
}

export default RecipeItem;
