import React, { Component } from "react";
import Input from "../components/Forms/Input.js";
import FormBtn from "../components/Forms/FormBtn.js";
import DropDwn from "../components/Forms/DropDwn.js";
import NavLogged from "../components/Nav/NavLogged.js";
import FooterLogged from "../components/Footer/FooterLogged.js";

class AddNewRecipe extends Component {
  //Need method for handling input submit for

  //We should add an input for saving images to be associated to the recipe created

  render() {
    return (
      <div>
        <NavLogged />
        <div className="editrecipe-container">
            <form>
                <h3 className="ERTitle">RECIPE NAME</h3>
                <div className="row">
                    <div className="recipe-page-col col-sm-12">
                    <Input className="ERInput" name="recipe-name" />
                    </div>
                </div>

                <h3 className="ERTitle">SERVING SIZE</h3>
                <div className="row">
                    <div className="recipe-page-col col-sm-12">
                    <Input className="ERInput" name="serving-size" />
                    </div>
                </div>

                <h3 className="ERTitle">INGREDIENTS</h3>
                <div className="row">
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
                    <FormBtn className="ERSubmit" buttonName="ADD" />
                    </div>
                </div>

                <h3 className="ERTitle">INSTRUCTIONS</h3>
                <div className="row">
                    <div className="recipe-page-col col-sm-11">
                    <Input className="ERInput" name="recipe-name" />
                    </div>
                    <div className="recipe-page-col col-sm-1">
                    <FormBtn className="ERSubmit" buttonName="ADD" />
                    </div>
                </div>

                <h3 className="ERTitle">TAGS</h3>
                <div className="row">
                    <div className="recipe-page-col col-sm-11">
                    <Input className="ERInput" name="recipe-name" />
                    </div>
                    <div className="recipe-page-col col-sm-1">
                    <FormBtn className="ERSubmit" buttonName="ADD" />
                    </div>
                </div>

                <button className="btn ingredient-btn recipeEdit" type="button">SUBMIT</button>
          </form>
        </div>
        <FooterLogged />
      </div>
    );
  }
}

export default AddNewRecipe;