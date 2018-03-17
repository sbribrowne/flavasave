import React, { Component } from "react";
import Input from "../components/Forms/Input.js";
import DropDwn from "../components/Forms/DropDwn.js";
import NavLogged from "../components/Nav/NavLogged.js";
import FooterLogged from "../components/Footer/FooterLogged.js";
import API from "../utils/API";
import axios from "axios";

class AddNewRecipe extends Component {
  state = {
    user: "",
    recipe_name: "",
    recipe_serving_size: "",
    recipe: {
      
    },
    ingredient: {
      ingredient_info: ""
    },
    instruction: {
      instruction_info: ""
    },
    tags: []
  }


  componentDidMount() {
    console.log(this.state)
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    let recipe = {...this.state.recipe};
    recipe.recipe_name = this.state.recipe_name;
    recipe.recipe_serving_size = this.state.recipe_serving_size;

    console.log(recipe)
    this.setState({recipe})
      
    
    API.addManualRecipe({
      recipe: this.state.recipe
    })

    // if (this.state.recipe_name) {
    //   API.addManualRecipe({
    //     recipe_name: this.state.recipe_name
    //   })
    //     //.then(res => this.loadRecipes())
    //     //.then(res => { window.location.href = "http://localhost:3000" + res.data; } )
    //     .catch(err => console.log(err));
    // }
  };


  render() {
    return (
      <div>
        <NavLogged />
        <div className="editrecipe-container">
          <form>
            <h3 className="ERTitle">RECIPE NAME</h3>
            <div className="row">
              <div className="recipe-page-col col-sm-12">
                <Input
                  value={this.state.recipe_name}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="recipe_name" />
              </div>
            </div>

            <h3 className="ERTitle">SERVING SIZE</h3>
            <div className="row">
              <div className="recipe-page-col col-sm-12">
                <Input
                  value={this.state.recipe_serving_size}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="recipe_serving_size" />
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
                <button className="btn ERSubmit" type="button">ADD</button>
              </div>
            </div>

            <h3 className="ERTitle">INSTRUCTIONS</h3>
            <div className="row">
              <div className="recipe-page-col col-sm-11">
                <Input className="ERInput" name="recipe-name" />
              </div>
              <div className="recipe-page-col col-sm-1">
                <button className="btn ERSubmit" type="button">ADD</button>
              </div>
            </div>

            <h3 className="ERTitle">TAGS</h3>
            <div className="row">
              <div className="recipe-page-col col-sm-11">
                <Input className="ERInput" name="recipe-name" />
              </div>
              <div className="recipe-page-col col-sm-1">
                <button className="btn ERSubmit" type="button">ADD</button>
              </div>
            </div>

            <button
              onClick={this.handleFormSubmit}
              className="btn recipe-add-button"
              type="button">SUBMIT</button>
          </form>
        </div>
        <FooterLogged />
      </div>
    );
  }
}

export default AddNewRecipe;