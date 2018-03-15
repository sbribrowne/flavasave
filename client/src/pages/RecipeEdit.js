import React, { Component } from "react";
import Input from "../components/Forms/Input.js";
import FormBtn from "../components/Forms/FormBtn.js";
import DropDwn from "../components/Forms/DropDwn.js";
import NavLogged from "../components/Nav/NavLogged.js";
import FooterLogged from "../components/Footer/FooterLogged.js";

class RecipeEdit extends Component {
  //Need method for handling input submit for

  //We should add an input for saving images to be associated to the recipe created

  render() {
    return (
      <div>
        <NavLogged />
        <div className="editrecipe-container">
          <h3 className="ERTitle">RECIPE NAME</h3>
          <form className="row">
            <div className="recipe-page-col col-sm-11">
              <Input className="ERInput" name="recipe-name" />
            </div>
            <div className="recipe-page-col col-sm-1">
              <FormBtn className="ERSubmit" buttonName="SUBMIT" />
            </div>
          </form>

          <h3 className="ERTitle">SERVING SIZE</h3>
          <form className="row">
            <div className="recipe-page-col col-sm-11">
              <Input className="ERInput" name="recipe-name" />
            </div>
            <div className="recipe-page-col col-sm-1">
              <FormBtn className="ERSubmit" buttonName="SUBMIT" />
            </div>
          </form>

          <h3 className="ERTitle">INGREDIENTS</h3>
          <form className="row">
            <div className="recipe-page-col col-sm-3">
              <Input className="ERInput" name="amount" />
            </div>
            <div className="recipe-page-col col-sm-1">
              <DropDwn />
            </div>
            <div className="recipe-page-col col-sm-7">
              <Input className="ERInput" name="ingredient" />
            </div>
            <div className="recipe-page-col col-sm-1">
              <FormBtn className="ERSubmit" buttonName="SUBMIT" />
            </div>
          </form>

          <h3 className="ERTitle">INSTRUCTIONS</h3>
          <form className="row">
            <div className="recipe-page-col col-sm-11">
              <Input className="ERInput" name="recipe-name" />
            </div>
            <div className="recipe-page-col col-sm-1">
              <FormBtn className="ERSubmit" buttonName="SUBMIT" />
            </div>
          </form>

          <h3 className="ERTitle">TAGS</h3>
          <form className="row">
            <div className="recipe-page-col col-sm-11">
              <Input className="ERInput" name="recipe-name" />
            </div>
            <div className="recipe-page-col col-sm-1">
              <FormBtn className="ERSubmit" buttonName="SUBMIT" />
            </div>
          </form>

          <button className="btn ingredient-btn recipeEdit" type="button">EDIT</button>
          <button className="btn ingredient-btn recipeDelete" type="button">DELETE</button>
          <button className="btn ingredient-btn recipeComplete" type="button">NEED TO COOK | RECIPE COMPLETE</button>
        </div>
        <FooterLogged />
      </div>
    );
  }
}

export default RecipeEdit;
