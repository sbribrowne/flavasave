import React, { Component } from "react";
import Input from "../components/Forms/Input.js";
import FormBtn from "../components/Forms/FormBtn.js";
import DropDwn from "../components/Forms/DropDwn.js";
import NavLogged from "../components/Nav/NavLogged.js";
import FooterLogged from "../components/Footer/FooterLogged.js";
import API from "../utils/API";
import axios from "axios";

class RecipeEdit extends Component {
  state = {
    recipes: [],
    id: "",
    recipe_name: "",
    serving_size: "",
    ingredients: [],
    instructions: []
    //tags: []
  };

  componentDidMount() {
    this.loadRecipes();
    console.log(this.state.recipes);
  }

  loadRecipes = () => {
    API.getRecipe(this.props.match.params.id)
      .then((res) => {
        this.setState({
          recipes: res.data,
          id: res.data.id,
          recipe_name: res.data.recipe_name,
          serving_size: res.data.recipe_serving_size,
          ingredients: res.data.Ingredients,
          instructions: res.data.Instructions,
          //tags: res.data.tags
        })
        console.log(res);
        console.log(res.data.Ingredients);
        console.log(this.state.recipes);
      })
      .catch(err => console.log(err));
  };

  deleteRecipe = id => {
    API.deleteRecipe(id)
      .then(res => this.loadRecipes())
      .catch(err => console.log(err));
  };


  updateName = id => {
    axios.put(`/api/recipes/${id}`,
      {
        recipeObj: {
          recipe_name: this.state.recipe_name
        }
      }
    )
      .then(res => this.loadRecipes());
  };

  updateServing = id => {
    axios.put(`/api/recipes/${id}`,
      {
        recipeObj: {
          recipe_serving_size: this.state.serving_size
        }
      }
    )
      .then(res => this.loadRecipes());
  };

  updateIngredient = id => {
    axios.put(`/api/recipes/${id}`,
      {
        recipeObj: {
          Ingredients: this.state.Ingredients
        }
      }
    )
      .then(res => this.loadRecipes());
  };

  updateInstructions = id => {
    axios.put(`/api/recipes/${id}`,
      {
        recipeObj: {
          Instructions: null
        }
      }
    )
      .then(res => this.loadRecipes());
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.recipe_url) {
      API.saveRecipe({
        recipe_url: this.state.recipe_url
      })
        .then(res => this.loadRecipes())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <NavLogged />
        <div className="editrecipe-container">
          <h3 className="ERTitle">RECIPE NAME</h3>
          <div className="row">
            <div className="recipe-page-col col-sm-11">
              <Input
                className="ERInput"
                name="recipe_name"
                value={this.state.recipe_name}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="recipe-page-col col-sm-1">
              <button
                className="btn ERSubmit"
                type="button"
                onClick={() => this.updateName(this.state.id)}>save</button>
            </div>
          </div>

          <h3 className="ERTitle">SERVING SIZE</h3>
          <div className="row">
            <div className="recipe-page-col col-sm-11">
              <Input
                className="ERInput"
                name="serving_size"
                value={this.state.serving_size}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="recipe-page-col col-sm-1">
              <button
                className="btn ERSubmit"
                type="button"
                onClick={() => this.updateServing(this.state.id)} >save</button>
            </div>
          </div>

          <h3 className="ERTitle">INGREDIENTS</h3>
          <div>
              {this.state.ingredients.map(ingredient => (
                <div className="row ER-row">
                  <div className="recipe-page-col col-sm-11">
                    <Input
                      className="ERInput"
                      name="ingredient"
                      value={ingredient.ingredient_info}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="recipe-page-col col-sm-1">
                    <button
                    className="btn ERSubmit"
                    type="button"
                    onClick={() => this.updateIngredient(this.state.id)}>save</button>
                  </div>
                </div>
              ))}
          </div>

          <h3 className="ERTitle">INSTRUCTIONS</h3>
          <div>
              {this.state.instructions.map(instruction => (
                <div className="row ER-row">
                  <div className="recipe-page-col col-sm-11">
                    <Input
                      className="ERInput"
                      name="instructions"
                      value={instruction.instruction_info}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="recipe-page-col col-sm-1">
                    <button 
                      className="btn ERSubmit" 
                      type="button"
                      onClick={() => this.updateInstruction(this.state.id)}>save</button>
                  </div>
                </div>
              ))}
          </div>

          <h3 className="ERTitle">TAGS</h3>
          <div className="row">
            <div className="recipe-page-col col-sm-11">
              <Input className="ERInput" name="recipe-name" />
            </div>
            <div className="recipe-page-col col-sm-1">
              <button className="btn ERSubmit" type="button">save</button>
            </div>
          </div>

          <div className="ingredient-btns">
            <button className="btn ingredient-btn recipeComplete" type="button">NEED TO COOK | RECIPE COMPLETE</button>
            <button onClick={() => this.deleteRecipe(this.state.id)} className="btn ingredient-btn recipeDelete" type="button">DELETE</button>
          </div>
        </div>
        <FooterLogged />
      </div>
    );
  }
}

export default RecipeEdit;
