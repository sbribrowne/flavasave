import React, { Component } from "react";
import Input from "../components/Forms/Input.js";
import FormBtn from "../components/Forms/FormBtn.js";
import DropDwn from "../components/Forms/DropDwn.js";
import NavLogged from "../components/Nav/NavLogged.js";
import FooterLogged from "../components/Footer/FooterLogged.js";
import API from "../utils/API";

class AddNewRecipe extends Component {
  state = {
    recipe: {},
    ingredients: [],
    instructions: []
  }


  // addRecipe() {
  //   API.addRecipe()
  //     .then((res => { 
  //       this.setState({ recipe: res.data} )
  //       console.log(res.data)
  //     }));
  // };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.recipe) {
  //     API.addRecipe({
  //       recipe: this.state.recipe
  //     })
  //       //.then(res => this.loadRecipes())
  //       //.then(res => { window.location.href = "http://localhost:3000" + res.data; } )
  //       .catch(err => console.log(err));
  //   }
  // };

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
                <form className="row">
                    <div className="recipe-page-col col-sm-12">
                    <Input className="ERInput" name="recipe-name" />
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
                    <FormBtn className="ERSubmit" buttonName="ADD" />
                    </div>
                </form>

                <h3 className="ERTitle">INSTRUCTIONS</h3>
                <form className="row">
                    <div className="recipe-page-col col-sm-11">
                    <Input className="ERInput" name="recipe-name" />
                    </div>
                    <div className="recipe-page-col col-sm-1">
                    <FormBtn className="ERSubmit" buttonName="ADD" />
                    </div>
                </form>

                <h3 className="ERTitle">TAGS</h3>
                <form className="row">
                    <div className="recipe-page-col col-sm-11">
                    <Input className="ERInput" name="recipe-name" />
                    </div>
                    <div className="recipe-page-col col-sm-1">
                    <FormBtn className="ERSubmit" buttonName="ADD" />
                    </div>
                </form>

                <button className="btn ingredient-btn recipeEdit" type="button">SUBMIT</button>
          </form>
        </div>
        <FooterLogged />
      </div>
    );
  }
}

export default AddNewRecipe;