import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_RECIPE } from "../utils/mutations";
import TextField from "@mui/material/TextField";
function AddRecipe(props) {
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    steps: "",
    ingredients: "",
  });
  const [addRecipe] = useMutation(ADD_RECIPE);
  console.log(addRecipe);
  const handleFormSubmit = async (event) => {
    console.log(
      formState.name +
        formState.description +
        formState.steps +
        formState.ingredients
    );
    event.preventDefault();
    const mutationResponse = await addRecipe({
      variables: {
        name: formState.name,
        description: formState.description,
        steps: formState.steps,
        ingredients: formState.ingredients,
      },
    });
    const token = mutationResponse.data.addRecipe.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className='container my-1'>
      <h2>Add Recipe</h2>
      <form onSubmit={handleFormSubmit}>
        <div className='flex-row space-between my-2'>
     //     <label htmlFor='name'>Recipe Name:</label>
          <TextField
           label="Recipe Name"
    
            placeholder='Recipe'
            name='name'
            type='name'
            id='name'
            onChange={handleChange}
          />
        </div>
        <div className='flex-row space-between my-2'>
       //   <label htmlFor='description'>Description:</label>
          <TextField
          multiline
            placeholder='description'
            name='description'
            type='description'
            id='description'
            onChange={handleChange}
          />
        </div>
        <div className='flex-row space-between my-2'>
          <label htmlFor='steps'>Steps:</label>
          <input
            placeholder='Recipe Steps'
            name='steps'
            type='steps'
            id='steps'
            onChange={handleChange}
          />
        </div>
        <div className='flex-row space-between my-2'>
          <label htmlFor='ingredients'>Ingredients:</label>
          <input
            placeholder='ingredients'
            name='ingredients'
            type='ingredients'
            id='ingredients'
            onChange={handleChange}
          />
        </div>
        <div className='flex-row flex-end'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipe;
