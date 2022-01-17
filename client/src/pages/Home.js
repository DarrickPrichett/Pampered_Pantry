import React from "react";
import RecipeList from "../components/RecipeList";
import CategoryMenu from "../components/CategoryMenu";

const Home = () => {
  return (
    <div className='container'>
      <CategoryMenu />
      <RecipeList />
    </div>
  );
};

export default Home;
