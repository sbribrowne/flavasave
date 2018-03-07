import React from "react";
import Nav from "../components/Nav/Nav.js";
import Input from "../components/Forms/Input.js";
import FormBtn from "../components/Forms/FormBtn.js";
import DropDwn from "../components/Forms/DropDwn.js";

const NewRecipe = () => {
  return (
    <div>
      <Nav />
      <div>
        <h3>Recipe Name</h3>
        <form class='row'>
          <Input name="recipe-name" placeholder="Recipe Name" />
          <FormBtn>Submit</FormBtn>
        </form>

        <h3>Serving Size</h3>
        <form class='row'>
          <Input name="serving-size" placeholder="Serving Size" />
          <FormBtn>Submit</FormBtn>
        </form>

        <h3>Ingredients</h3>
        <form class='row'>
          <Input name="amount" placeholder="Amount" />
          <DropDwn />
          <Input name="ingredient" placeholder="Ingredient" />
          <FormBtn>Submit</FormBtn>
        </form>

        <h3>Instructions</h3>
        <form class='row'>
          <Input name="instructions" placeholder="Instructions" />
          <FormBtn>Submit</FormBtn>
        </form>

        <h3>Tags</h3>
        <form class='row'>
          <Input name="tags" placeholder="Tags" />
          <FormBtn>Submit</FormBtn>
        </form>
      </div>
    </div>
  );
};

export default NewRecipe;
