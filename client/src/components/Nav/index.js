import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className='flex-row'>
          <li className='mx-1'>
            <Link to={"/addRecipe"}>Add Recipe</Link>
          </li>
<<<<<<< HEAD
          <li className='mx-1'>
            <Link to={'/myRecipes'}>My Recipes</Link>
          </li>
=======
         { /* <li className='mx-1'>
            <Link to='/myRecipes'>My Recipes</Link>
      </li> */}
>>>>>>> b9def8cf4289b9c78a8f4376fff18227f45412f5

          <li className='mx-1'>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href='/' onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className='flex-row'>
          <li className='mx-1'>
            <Link to='/signup'>Signup</Link>
          </li>
          <li className='mx-1'>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className='flex-row px-1'>
      <h1>
        <Link to='/'>
          <span role='img' aria-label='chef'>
            🧑‍🍳🥘
          </span>
          Pampered Pantry
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
