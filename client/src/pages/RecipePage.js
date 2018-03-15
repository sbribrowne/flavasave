import React, { Component } from "react";
import Panel from "../components/Panels/Panel.js";
// import Nav from "../components/Nav/Nav";
// import Footer from "../components/Footer/Footer";
import IngredientList from "../components/Lists/IngredientList";
import IngredientListItem from "../components/Lists/IngredientListItem";
import InstructionList from "../components/Lists/InstructionList";
import InstructionListItem from "../components/Lists/InstructionListItem";
import FooterLogged from "../components/Footer/FooterLogged.js";
import API from "../utils/API";
import "../stylesheets/css/main.css";
import DeleteBtn from "../components/Buttons/DeleteBtn";
import RecipeNotes from "../components/Forms/RecipeNotes"

class Recipes extends Component {
  state = {
    recipe: {},
    ingredients: [],
    instructions: []
  }

  componentDidMount() {
    this.loadRecipe();
  }

  loadRecipe = () => {
    API.getRecipe(this.props.match.params.id)
    .then(
      res => {
        this.setState({ 
          recipe: res.data,
          ingredients: res.data.Ingredients, 
          instructions: res.data.Instructions 
        });
      }
    );
  };

  deleteIngredient(){

  }
  //Need an editRecipe method

  //Need a deleteRecipe method

  //Need a handler for swapping the recipe from NeedtoCook to Complete


  // render() {
  //   return (
  //     <div>
  //       {this.state.recipe}
  //     </div>
  //   )
  // }
  render() {
    return (
      <div>
        <NavLogged />

        <div className="recipe-header">
          <h2 className="recipe-title">{this.state.recipe.recipe_name}</h2>
          <p className="recipe-servingsize">Serving Size: goes here</p>
          {/* Stand in IMAGE */}
          <img src={require("../images/salmon.jpg")} alt="Store Image" height="400" />
        </div>

        <div className="ingredient-div">
          <h4 className="recipe-subtitle">INGREDIENTS</h4>
          {this.state.ingredients.length ? ( //Check for Ingredients
            <IngredientList>
              {this.state.ingredients.map(ingredient => (
                <IngredientListItem key={ingredient.id} data={ingredient} />
              ))}
            </IngredientList>
            ) : (
              <h3>No Results to Display</h3>
            )}      
        </div>

        {/* STAND IN DIRECTIONS SECTION */}
        <div className="instruction-div">
          <h4 className="recipe-subtitle">DIRECTIONS</h4>
          {this.state.instructions.length ? ( //Check for Instructions
            <InstructionList>
              {this.state.instructions.map(instruction => (
                <InstructionListItem key={instruction.id} data={instruction} />
              ))}
            </InstructionList>
            ) : (
              <h3>No Results to Display</h3>
            )} 
        </div>
        
        <p><a target="_blank" href={this.state.recipe.recipe_url} className="recipe-link">{this.state.recipe.recipe_url}</a></p>

        <Panel name="STICKY NOTES" panelfullclass="panel recipe-notes-panel" panelheaderclass="recipe-notes-header">    
            <RecipeNotes data={this.state.recipe.recipe_notes} />
        </Panel>
        
        <div className="container-fluid recipepage-btns">
          <button className="btn recipepage-btn" type="button">ADD</button>
          <button className="btn recipepage-btn" type="button">DELETE</button>
          <button className="btn recipepage-btn" type="button">NEED TO COOK | COMPLETE</button>
        </div>

        <FooterLogged />
      </div>
    );
  };
};

export default Recipes;
