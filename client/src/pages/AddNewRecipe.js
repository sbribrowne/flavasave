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
            <div className="col-sm-11">
              <Input name="recipe-name" />
            </div>
            <div className="col-sm-1">
              <FormBtn>Submit</FormBtn>
            </div>
          </form>

          <h3>Serving Size</h3>
          <form className="row">
            <div className="col-sm-11">
              <Input name="recipe-name" />
            </div>
            <div className="col-sm-1">
              <FormBtn>Submit</FormBtn>
            </div>
          </form>

          <h3>Ingredients</h3>
          <form className="row">
            <div className="col-sm-3">
              <Input name="amount" />
            </div>
            <div className="col-sm-1">
              <DropDwn />
            </div>
            <div className="col-sm-7">
              <Input name="ingredient" />
            </div>
            <div className="col-sm-1">
              <FormBtn>Submit</FormBtn>
            </div>
          </form>

          <h3>Instructions</h3>
          <form className="row">
            <div className="col-sm-11">
              <Input name="recipe-name" />
            </div>
            <div className="col-sm-1">
              <FormBtn>Submit</FormBtn>
            </div>
          </form>

          <h3>Tags</h3>
          <form className="row">
            <div className="col-sm-11">
              <Input name="recipe-name" />
            </div>
            <div className="col-sm-1">
              <FormBtn>Submit</FormBtn>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddNewRecipe;
