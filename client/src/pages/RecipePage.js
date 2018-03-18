import React, { Component } from "react";
import { Link } from "react-router-dom";
import Panel from "../components/Panels/Panel.js";
import NavLogged from "../components/Nav/NavLogged";
import IngredientList from "../components/Lists/IngredientList";
import IngredientListItem from "../components/Lists/IngredientListItem";
import InstructionList from "../components/Lists/InstructionList";
import InstructionListItem from "../components/Lists/InstructionListItem";
import FooterLogged from "../components/Footer/FooterLogged.js";
import API from "../utils/API";
import "../stylesheets/css/main.css";
import DeleteBtn from "../components/Buttons/DeleteBtn";
import RecipeNotes from "../components/Forms/RecipeNotes";
import Input from "../components/Forms/Input.js";
import axios from "axios";

class Recipes extends Component {
  state = {
    recipe: {},
    ingredients: [],
    instructions: []
  };

  componentDidMount() {
    this.loadRecipe();
  }

  makeTrue = id => {
    axios
      .put(`/api/recipes/${id}`, {
        recipeObj: {
          recipe_checkbox: 1
        }
      })
      .then(res => this.loadRecipe());
  };

  makeFalse = id => {
    axios
      .put(`/api/recipes/${id}`, {
        recipeObj: {
          recipe_checkbox: 0
        }
      })
      .then(res => this.loadRecipe());
  };

  updateNotes = id => {
    axios
      .put(`/api/recipes/${id}`, {
        recipeObj: {
          recipe_notes: this.state.recipe_notes
        }
      })
      .then(res => this.loadRecipe());
  };

  loadRecipe = () => {
    API.getRecipe(this.props.match.params.id)
      .then(res => {
        console.log(res);
        this.setState({
          recipe: res.data,
          recipe_notes: res.data.recipe_notes,
          ingredients: res.data.Ingredients,
          instructions: res.data.Instructions
        });
      })
      .catch(error => console.log(error));
  };

  ingredientCheck = (id, checkbox) => {
    console.log(checkbox);

    if (!checkbox) {
      console.log("false");
      axios
        .put(`/api/ingredients/toggle/${id}`, {
          ingredientObj: {
            ingredient_checkbox: 1
          }
        })
        .then(res => this.loadRecipe());
    } else if (checkbox) {
      console.log("true");
      axios
        .put(`/api/ingredients/toggle/${id}`, {
          ingredientObj: {
            ingredient_checkbox: null
          }
        })
        .then(res => this.loadRecipe());
    }
    console.log(checkbox);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <NavLogged />

        <div className="recipe-header">
          <h2 className="recipe-title">{this.state.recipe.recipe_name}</h2>
          <p className="recipe-servingsize">
            Yield:
            {this.state.recipe.recipe_serving_size ? (
              <span>{this.state.recipe.recipe_serving_size}</span>
            ) : (
              <span> Unknown - cook it and find out</span>
            )}
          </p>

          {this.state.recipe.recipe_image_url ? (
            <p className="recipe-image">
              <img
                src={this.state.recipe.recipe_image_url}
                alt={this.state.recipe.recipe_name}
                height="400"
              />
            </p>
          ) : (
            <div className="no-image" height="0">
              <i className="glyphicon glyphicon-camera" />
            </div>
          )}
        </div>

        <div className="ingredient-div">
          <h4 className="recipe-subtitle">INGREDIENTS</h4>
          {this.state.ingredients ? ( //Check for Ingredients
            <IngredientList>
              {this.state.ingredients.map(ingredient => (
                <IngredientListItem
                  onClick={() =>
                    this.ingredientCheck(
                      ingredient.id,
                      ingredient.ingredient_checkbox
                    )
                  }
                  key={ingredient.id}
                  data={ingredient}
                />
              ))}
            </IngredientList>
          ) : (
            <h3 className="ingredientChecklist">No Results to Display</h3>
          )}
        </div>
        <div className="instruction-div">
          <h4 className="recipe-subtitle">DIRECTIONS</h4>
          {this.state.instructions ? ( //Check for Instructions
            <InstructionList>
              {this.state.instructions.map(instruction => (
                <InstructionListItem key={instruction.id} data={instruction} />
              ))}
            </InstructionList>
          ) : (
            <h3 className="instructionChecklist">No Results to Display</h3>
          )}
        </div>

        <div className="recipe-link-box">
          <a
            target="_blank"
            href={this.state.recipe.recipe_url}
            className="recipe-link"
          >
            {this.state.recipe.recipe_url}
          </a>
        </div>

        <div className="container-fluid recipepage-btns">
          <Link
            className="btn btn-sm recipepage-btn"
            to={"/recipeedit/" + this.state.recipe.id}
          >
            {" "}
            Edit{" "}
          </Link>
          {this.state.recipe.recipe_checkbox ? (
            <button
              className="btn recipepage-btn"
              type="button"
              onClick={() => this.makeFalse(this.state.recipe.id)}
            >
              NEED TO COOK
            </button>
          ) : (
            <button
              className="btn recipepage-btn"
              type="button"
              onClick={() => this.makeTrue(this.state.recipe.id)}
            >
              COMPLETED
            </button>
          )}
        </div>

        <Panel
          name="STICKY NOTES"
          panelfullclass="panel recipe-notes-panel"
          panelheaderclass="recipe-notes-header"
        >
          <Input
            //className="ERInput"
            name="recipe_notes"
            value={this.state.recipe_notes}
            onChange={this.handleInputChange}
          />
          <button
            className="btn ERSubmit"
            type="button"
            onClick={() => this.updateNotes(this.state.recipe.id)}
          >
            Save
          </button>
        </Panel>

        <FooterLogged />
      </div>
    );
  }
}

export default Recipes;
