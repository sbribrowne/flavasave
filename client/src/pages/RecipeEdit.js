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
    instructions: [],
    new_ingredient: "",
    new_instruction: "",
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
        console.log(res.data.Instructions);
        console.log(this.state);
      })
      .catch(err => console.log(err));
  };

  deleteRecipe = id => {
    API.deleteRecipe(id)
      .then(res => this.loadRecipes())
      .catch(err => console.log(err));
  };

  deleteIngredient = id => {
    API.deleteIngredient(id)
      .then(res => this.loadRecipes())
      .catch(err => console.log(err));
  };

  deleteInstruction = id => {
    API.deleteInstruction(id)
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
          Instructions: this.state.Instructions
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

  handleInstructionChange = (event, i) => {
    let Instructions = [...this.state.instructions]
    const { name, value } = event.target;
    Instructions[i].instruction_info = value;
    //find where we are working in array (find index of what's changing)

    this.setState({
      instructions: Instructions
    });
  };

  handleChange = event => {
    console.log(this.state);
    this.setState({
      value: event.target.value
    });
  }

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
            {this.state.ingredients.map((ingredient, i) => (
              <div key={ingredient.id} className="row ER-row">
                <div key={ingredient.id} className="recipe-page-col col-sm-10">
                  <Input key={ingredient.id}
                    className="ERInput"
                    name="ingredients"
                    value={ingredient.ingredient_info}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="recipe-page-col col-sm-1">
                  <button key={ingredient.id}
                    className="btn ERSubmit"
                    type="button"
                    onClick={() => this.updateIngredient(ingredient.id)}>save</button>
                </div>
                <div className="recipe-page-col col-sm-1">
                  <button key={ingredient.id}
                    className="btn ERSubmit"
                    type="button"
                    onClick={() => this.deleteIngredient(ingredient.id)}>delete</button>
                </div>
              </div>
            ))
            }
          </div>

          <h3 className="ERTitle">ADD NEW INGREDIENT</h3>
          <div className="row">
            <div className="recipe-page-col col-sm-11">
              <Input
                className="ERInput"
                name="new_ingredient"
                value={this.state.new_ingredient}
                onChange={() => this.handleInputChange}
              />
            </div>
            <div className="recipe-page-col col-sm-1">
              <button
                className="btn ERSubmit"
                type="button"
                onClick={() => this.newIngredient(this.state.id)}>save</button>
            </div>
          </div>

          <h3 className="ERTitle">INSTRUCTIONS</h3>
          <div>
            {this.state.instructions.map((instruction, i) => (
              <div key={instruction.id} className="row ER-row">

                <div className="recipe-page-col col-sm-10">
                  <Input key={instruction.id}
                    className="ERInput"
                    name={instruction.id}
                    value={instruction.instruction_info}
                    onChange={(event) => this.handleInstructionChange(event, i)}
                  />
                </div>
                <div className="recipe-page-col col-sm-1">
                  <button
                    className="btn ERSubmit"
                    type="button"
                    onClick={() => this.updateInstructions(instruction.id)}>save</button>
                </div>
                <div className="recipe-page-col col-sm-1">
                  <button key={instruction.id}
                    className="btn ERSubmit"
                    type="button"
                    onClick={() => this.deleteInstruction(instruction.id)}>delete</button>
                </div>
              </div>
            ))}
          </div>

          <h3 className="ERTitle">ADD NEW INSTRUCTION</h3>
          <div className="row">
            <div className="recipe-page-col col-sm-11">
              <Input
                className="ERInput"
                name="new_instruction"
                value={this.state.new_ingredient}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="recipe-page-col col-sm-1">
              <button
                className="btn ERSubmit"
                type="button"
                onClick={() => this.newInstruction(this.state.id)}>save</button>
            </div>
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
