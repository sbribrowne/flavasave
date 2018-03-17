import React, { Component } from "react";
import Input from "../components/Forms/Input.js";
import NavLogged from "../components/Nav/NavLogged.js";
import FooterLogged from "../components/Footer/FooterLogged.js";
import API from "../utils/API";

class AddNewRecipe extends Component {
  state = {
    recipe_name: "",
    recipe_serving_size: "",
    recipe: {
    },
    ingredient_info: "",
    ingredient: {
    },
    ingredients: [],
    instruction_info: "",
    instruction: {
    },
    instructions: [],
    tag_info: "",
    tag: {},
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

  handleAddIngredient = event => {
    event.preventDefault();

    
  }

  handleFormSubmit = event => {
    event.preventDefault();

    let recipe = {...this.state.recipe};
    recipe.recipe_name = this.state.recipe_name;
    recipe.recipe_serving_size = this.state.recipe_serving_size;

    let instruction = { ...this.state.instruction };
    instruction.instruction_info = this.state.instruction_info;
    
    let ingredient = { ...this.state.ingredient };
    ingredient.ingredient_info = this.state.ingredient_info;

    let tag = { ...this.state.tag };
    tag.tag_info = this.state.tag_info;

    console.log(recipe, ingredient, instruction, tag)
    this.setState({recipe, ingredient, instruction, tag})
    API.addManualRecipe({
      recipe: recipe,
      ingredient: ingredient,
      instruction: instruction,
      tag: tag
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
                <Input 
                value={this.state.ingredient_info}
                onChange={this.handleInputChange}
                className="ERInput"
                name="ingredient_info" />
              </div>
              <div className="recipe-page-col col-sm-1">
                <button 
                className="btn ERSubmit" type="button">ADD</button>
              </div>
            </div>

            <h3 className="ERTitle">INSTRUCTIONS</h3>
            <div className="row">
              <div className="recipe-page-col col-sm-11">
                <Input 
                value={this.state.instruction_info}
                onChange={this.handleInputChange}
                className="ERInput" 
                name="instruction_info" />
              </div>
              <div className="recipe-page-col col-sm-1">
                <button 
                onClick=""
                className="btn ERSubmit" 
                type="button">ADD</button>
              </div>
            </div>

            <h3 className="ERTitle">TAGS</h3>
            <div className="row">
              <div className="recipe-page-col col-sm-11">
                <Input 
                value={this.state.tag_info}
                onChange={this.handleInputChange}
                className="ERInput" 
                name="tag_info" />
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