import React from "react";
import RecipeList from "../components/RecipeList";
import CategoryMenu from "../components/CategoryMenu";
import Paper from "@mui/material/Paper";
const Home = () => {
  return (
    <Paper elevation={3}>
      <CategoryMenu />
      <RecipeList />
    </Paper>
  );
};

export default Home;
