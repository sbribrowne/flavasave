import React, { Component } from "react";
import Input from "../components/Forms/Input.js";
import FormBtn from "../components/Forms/FormBtn.js";
import DropDwn from "../components/Forms/DropDwn.js";
import NavLogged from "../components/Nav/NavLogged.js";

class AddNewRecipe extends Component {
  //Need method for handling input submit for

  //We should add an input for saving images to be associated to the recipe created

  render() {
    return (
      <div>
        <NavLogged />
        <div>
          <h3>Recipe Name</h3>
          <form className="row">
            <Input name="recipe-name" />
            <FormBtn>Submit</FormBtn>
          </form>

          <h3>Serving Size</h3>
          <form className="row">
            <Input name="serving-size" />
            <FormBtn>Submit</FormBtn>
          </form>

          <h3>Ingredients</h3>
          <form className="row">
            <Input name="amount" />
            <DropDwn />
            <Input name="ingredient" />
            <FormBtn>Submit</FormBtn>
          </form>

          <h3>Instructions</h3>
          <form className="row">
            <Input name="instructions" />
            <FormBtn>Submit</FormBtn>
          </form>

          <h3>Tags</h3>
          <form className="row">
            <Input name="tags" />
            <FormBtn>Submit</FormBtn>
          </form>
        </div>
      </div>
    );
  }
}

export default AddNewRecipe;
