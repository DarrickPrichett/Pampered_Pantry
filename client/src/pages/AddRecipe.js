import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_RECIPE } from "../utils/mutations";
import {TextField, Button} from "@mui/material";
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
      
          <TextField
           label="Recipe Name"
    
            placeholder='Recipe'
            name='name'
            type='name'
            id='name'
            variant='standard'
            onChange={handleChange}
            sx={{width:"100%"}}

          />
        </div>
        <div className='flex-row space-between my-2'>
 
          <TextField
          multiline
          label='description'
            placeholder='description'
            name='description'
            type='description'
            id='description'
            variant='standard'
            onChange={handleChange}
            sx={{width:"100%"}}

          />
        </div>
        <div className='flex-row space-between my-2'>
  
          <TextField
          label='Recipe Steps'
          multiline
            placeholder='Recipe Steps'
            name='steps'
            type='steps'
            id='steps'
            onChange={handleChange}
            variant='standard'
            sx={{width:"100%"}}

          />
        </div>
        <div className='flex-row space-between my-2'>
            <TextField
            sx={{width:"100%"}}

label ='ingredients'
            multiline
            placeholder='ingredients'
            name='ingredients'
            type='ingredients'
            id='ingredients'
            onChange={handleChange}
            variant='standard'
          />
        </div>
        <div className='flex-row flex-end'>
          <Button type='submit'
            variant="contained"
            color="warning">Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipe;
