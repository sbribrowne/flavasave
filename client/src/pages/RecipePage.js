import React, { Component } from "react";
import Panel from "../components/Panels/Panel.js";
// import Nav from "../components/Nav/Nav";
// import Footer from "../components/Footer/Footer";
import IngredientList from "../components/Lists/IngredientList";
<<<<<<< HEAD
=======
import IngredientListItem from "../components/Lists/IngredientListItem";
import InstructionList from "../components/Lists/InstructionList";
import InstructionListItem from "../components/Lists/InstructionListItem";
import FooterLogged from "../components/Footer/FooterLogged.js";
>>>>>>> upstream/master
import API from "../utils/API";
import "../stylesheets/css/main.css";
import DeleteBtn from "../components/Buttons/DeleteBtn";
import RecipeNotes from "../components/Forms/RecipeNotes"

class Recipes extends Component {
  state = {
<<<<<<< HEAD
    recipe: []
  }

  // componentDidMount() {
  //   API.getRecipe().then(res => this.setState({ recipe: res.data })
  // );
  // }
=======
    recipe: {},
    ingredients: [],
    instructions: []
  }

  componentDidMount() {
    this.loadRecipe();
  }
>>>>>>> upstream/master

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
                <IngredientListItem key={ingredient.id} data={ingredient} />
              ))}
            </IngredientList>
            ) : (
              <h3>No Results to Display</h3>
            )}    
        </Panel>
        <div className="container" height="400" width="400">
          <RecipeNotes data={this.state.recipe.recipe_notes} />
      </div>

        {/* STAND IN DIRECTIONS SECTION */}
        <Panel>
          <h4>DIRECTIONS</h4>
          {this.state.instructions.length ? ( //Check for Instructions
            <InstructionList>
              {this.state.instructions.map(instruction => (
                <InstructionListItem key={instruction.id} data={instruction} />
              ))}
            </InstructionList>
            ) : (
              <h3>No Results to Display</h3>
            )} 
        </Panel>
        {/* STAND IN BUTTONS */}
        <Panel>
          <button>ADD</button>
          <button>DELETE</button>
          <button>NEED TO COOK|COMPLETE</button>
        </Panel>
      </div>
    );
  };
};

export default Recipes;
