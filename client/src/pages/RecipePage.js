import React, { Component } from "react";
import NavLogged from "../components/Nav/NavLogged.js";
import Panel from "../components/Panels/Panel.js";
import IngredientList from "../components/Lists/IngredientList";
import IngredientListItem from "../components/Lists/IngredientListItem";
import FooterLogged from "../components/Footer/FooterLogged.js";
import API from "../utils/API";
import "../stylesheets/css/main.css";
import DeleteBtn from "../components/Buttons/DeleteBtn";

class Recipes extends Component {
  state = {
    recipe: {
      Ingredients: ["asdfafd"]
    },
    ingredients: ["asdf"]
  }

  componentDidMount() {
    this.loadRecipe();
  }

  loadRecipe = () => {
    API.getRecipe(this.props.match.params.id)
    .then(
      res => {
        this.setState({ 
          recipe: res.data
        });

        this.setState({ 
          ingredients: res.data.Ingredients
        });
      }
    );
  };

  deleteIngredient(){

  }
  //Need an editRecipe method

  //Need a deleteRecipe method

  //Need a handler for swapping the recipe from NeedtoCook to Complete

  render() {
    return (
      <div>
        <NavLogged />
        <Panel className="recipe-header">
          <h2>{this.state.recipe.recipe_name}</h2>
          <p><a target="_blank" href={this.state.recipe.recipe_url}>{this.state.recipe.recipe_url}</a></p>
          <p>Recipe ID: {this.props.match.params.id}</p>
          <p>Serving Size: GOES HERE</p>

          {/* Stand in IMAGE */}
          <img src={require("../images/salmon.jpg")} alt="Store Image" height="400" />
        </Panel>
        <Panel>
          <h4>INGREDIENTS</h4>
          {this.state.ingredients.length ? ( //Check for Ingredients
            <IngredientList>
              {this.state.ingredients.map(ingredient => (
                <IngredientListItem key={ingredient.id} data={ingredient}>
                  <p>{ingredient.ingredient_info}</p>
                </IngredientListItem>
              ))}
            </IngredientList>
            ) : (
              <h3>No Results to Display</h3>
            )}    
        </Panel>
        <div className="container" height="400" width="400">
          STAND IN NOTES SECTION
      </div>

        {/* STAND IN DIRECTIONS SECTION */}
        <Panel>
          <h4>DIRECTIONS</h4>
          <p>The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.
            The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.
            The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.
            The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.
        </p>
        </Panel>
        {/* STAND IN BUTTONS */}
        <Panel>
          <button>ADD</button>
          <button>DELETE</button>
          <button>NEED TO COOK|COMPLETE</button>
        </Panel>
        <FooterLogged />
      </div>
    );
  };
};

export default Recipes;
