import React, { Component } from "react";
import Input from "../components/Forms/Input.js";
import NavLogged from "../components/Nav/NavLogged.js";
import FooterLogged from "../components/Footer/FooterLogged.js";
import API from "../utils/API";
import axios from "axios";
import { Link } from "react-router-dom";

class RecipeEdit extends Component {
  state = {
    recipes: [],
    id: "",
    recipe_name: "",
    serving_size: "",
    ingredients: [],
    instructions: [],
    tags: [],
    new_ingredient: "",
    new_instruction: "",
    new_tag: ""
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
          tags: res.data.Tags
          //tags: res.data.tags
        })
        console.log(res);
        console.log(res.data.Tags);
        console.log(this.state.recipes);
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
      .then(res => {
        console.log(res);
        this.loadRecipes();
      });
  };

  updateIngredient = id => {
    console.log(this.state.ingredients)
    axios.put(`/api/ingredients/${id}`,
      {
        ingredientObj: {
          ingredients: this.state.ingredients
        }
      }
    )
      .then(res => this.loadRecipes());
  };

  newIngredient = () => {
    axios.post(`/api/ingredients/`,
      {
        ingredientObj: {
          RecipeId: this.state.recipes.id,
          ingredient_info: this.state.new_ingredient
        }
      }
    )
      .then(res => this.loadRecipes())
      .then(this.setState({
        new_ingredient: ""
      }))
  };

  updateInstructions = id => {
    axios.put(`/api/instructions/${id}`,
      {
        instructionObj: {
          instructions: this.state.instructions
        }
      }
    )
      .then(res => this.loadRecipes());
  };

  newInstruction = () => {
    axios.post(`/api/instructions/`,
      {
        instructionObj: {
          RecipeId: this.state.recipes.id,
          instruction_info: this.state.new_instruction
        }
      }
    )
      .then(res => this.loadRecipes())
      .then(this.setState({
        new_instruction: ""
      }))
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

  handleIngredientChange = (event, i) => {
    let Ingredients = [...this.state.ingredients]
    const { name, value } = event.target;
    Ingredients[i].ingredient_info = value;
    console.log(value)
    //find where we are working in array (find index of what's changing)

    this.setState({
      ingredients: Ingredients
    });
    console.log(this.state.ingredients)
  };

  handleTagChange = (event, i) => {
    let Tags = [...this.state.tags]
    const { name, value } = event.target;
    Tags[i].tag_name = value;
    console.log(value)
    //find where we are working in array (find index of what's changing)

    this.setState({
      tags: Tags
    });
    console.log(this.state.tags)
  };

  updateTag = id => {
    console.log(this.state.tags)
    axios.put(`/api/tags/${id}`,
      {
        tagObj: {
          tags: this.state.tags
        }
      }
    )
      .then(res => this.loadRecipes());
  };

  deleteTag = id => {
    API.deleteTag(id)
      .then(res => this.loadRecipes())
      .catch(err => console.log(err));
  };

  newTag = () => {
    axios.post(`/api/tags/`,
      {
        tagObj: {
          RecipeId: this.state.recipes.id,
          tag_name: this.state.new_tag
        }
      }
    )
      .then(res => this.loadRecipes())
      .then(this.setState({
        new_tag: ""
      }))
  };

  handleChange = event => {
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
                className="btn ERSubmit ERSave"
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
                className="btn ERSubmit ERSave"
                type="button"
                onClick={() => this.updateServing(this.state.id)} >save</button>
            </div>
          </div>

          <h3 className="ERTitle">INGREDIENTS</h3>
          <div>
            {this.state.ingredients.map((ingredient, i) => (
              <div key={ingredient.id} className="row ER-row">
                <div key={ingredient.id} className="recipe-page-col col-sm-10">
                  <Input
                    key={ingredient.id}
                    id={ingredient.id}
                    className="ERInput"
                    name={ingredient.id}
                    value={ingredient.ingredient_info}
                    onChange={(event) => this.handleIngredientChange(event, i)}
                  />
                </div>
                <div className="recipe-page-col col-sm-1">
                  <button key={ingredient.id}
                    className="btn ERSubmit ERSave"
                    type="button"
                    onClick={() => this.updateIngredient(this.state.recipes.id)}>save</button>
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

          <h3 className="ERTitle ERAdd">ADD NEW INGREDIENT</h3>
          <div className="row">
            <div className="recipe-page-col col-sm-11">
              <Input
                className="ERInput"
                name="new_ingredient"
                value={this.state.new_ingredient}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="recipe-page-col col-sm-1">
              <button
                className="btn ERSubmit ERSave"
                type="button"
                onClick={() => this.newIngredient(this.state.id)}>save</button>
            </div>
          </div>

          {this.state.instructions.length ? (
            <div>
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
                        className="btn ERSubmit ERSave"
                        type="button"
                        onClick={() => this.updateInstructions(this.state.recipes.id)}>save</button>
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
            </div>
          ) : (
              <h3 className="noshow" />
            )}

          <h3 className="ERTitle ERAdd">ADD NEW INSTRUCTION</h3>
          <div className="row">
            <div className="recipe-page-col col-sm-11">
              <Input
                className="ERInput"
                name="new_instruction"
                value={this.state.new_instruction}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="recipe-page-col col-sm-1">
              <button
                className="btn ERSubmit ERSave"
                type="button"
                onClick={() => this.newInstruction(this.state.id)}>save</button>
            </div>
          </div>

          {this.state.tags.length ? (
            <div>
              <h3 className="ERTitle">TAGS</h3>
              <div>
                {this.state.tags.map((tag, i) => (
                  <div key={tag.id} className="row ER-row">
                    <div key={tag.id} className="recipe-page-col col-sm-10">
                      <Input
                        key={tag.id}
                        id={tag.id}
                        className="ERInput"
                        name={tag.id}
                        value={tag.tag_name}
                        onChange={(event) => this.handleTagChange(event, i)}
                      />
                    </div>
                    <div className="recipe-page-col col-sm-1">
                      <button key={tag.id}
                        className="btn ERSubmit ERSave"
                        type="button"
                        onClick={() => this.updateTag(this.state.recipes.id)}>save</button>
                    </div>
                    <div className="recipe-page-col col-sm-1">
                      <button key={tag.id}
                        className="btn ERSubmit"
                        type="button"
                        onClick={() => this.deleteTag(tag.id)}>delete</button>
                    </div>
                  </div>
                ))
                }
              </div>
            </div>
          ) : (
              <h3 className="noshow" />
            )}

          <h3 className="ERTitle">ADD NEW TAG</h3>
          <div className="row">
            <div className="recipe-page-col col-sm-11">
              <Input
                className="ERInput"
                name="new_tag"
                value={this.state.new_tag}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="recipe-page-col col-sm-1">
              <button
                className="btn ERSubmit ERSave"
                type="button"
                onClick={() => this.newTag(this.state.id)}>save</button>
            </div>
          </div>

          <div className="ingredient-btns">
            <Link to={"/recipe/" + this.state.id}>
              <button className="btn ingredient-btn recipeComplete" type="button">GO TO RECIPE</button>
            </Link>
            <Link to={"/userpage"}>
              <button onClick={() => this.deleteRecipe(this.state.id)} className="btn ingredient-btn recipeDelete" type="button">DELETE</button>
            </Link>
          </div>
        </div>
        <FooterLogged />
      </div>
    );
  }
}

export default RecipeEdit;
