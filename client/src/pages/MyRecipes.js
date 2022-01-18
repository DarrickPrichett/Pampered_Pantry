import React from "react";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

function MyRecipes() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className='container my-1'>
        <Link to='/'>← Back to Recipe HomePage</Link>

        {user ? (
          <>
            <h2>
              Recipes from {user.firstName} {user.lastName}
            </h2>
            {user.recipes.map((recipe) => (
              <div key={recipe._id} className='my-2'>
                <h3>
                  {new Date(parseInt(recipe.createdAt)).toLocaleDateString()}
                </h3>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default MyRecipes;
