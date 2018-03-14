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
        <div className="editrecipe-container">
          <h3>RECIPE NAME</h3>
          <form className="row">
            <div className="recipe-page-col col-sm-11">
              <Input name="recipe-name" />
            </div>
            <div className="recipe-page-col col-sm-1">
              <FormBtn className="ERSubmit" buttonName="SUBMIT" />
            </div>
          </form>

          <h3>SERVING SIZE</h3>
          <form className="row">
            <div className="recipe-page-col col-sm-11">
              <Input name="recipe-name" />
            </div>
            <div className="recipe-page-col col-sm-1">
              <FormBtn className="ERSubmit" buttonName="SUBMIT" />
            </div>
          </form>

          <h3>INGREDIENTS</h3>
          <form className="row">
            <div className="recipe-page-col col-sm-3">
              <Input name="amount" />
            </div>
            <div className="recipe-page-col col-sm-1">
              <DropDwn />
            </div>
            <div className="recipe-page-col col-sm-7">
              <Input name="ingredient" />
            </div>
            <div className="recipe-page-col col-sm-1">
              <FormBtn className="ERSubmit" buttonName="SUBMIT" />
            </div>
          </form>

          <h3>INSTRUCTIONS</h3>
          <form className="row">
            <div className="recipe-page-col col-sm-11">
              <Input name="recipe-name" />
            </div>
            <div className="recipe-page-col col-sm-1">
              <FormBtn className="ERSubmit" buttonName="SUBMIT" />
            </div>
          </form>

          <h3>TAGS</h3>
          <form className="row">
            <div className="recipe-page-col col-sm-11">
              <Input name="recipe-name" />
            </div>
            <div className="recipe-page-col col-sm-1">
              <FormBtn className="ERSubmit" buttonName="SUBMIT" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddNewRecipe;
