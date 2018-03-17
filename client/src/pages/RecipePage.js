import React, { Component } from "react";
import Panel from "../components/Panels/Panel.js";
// import Nav from "../components/Nav/Nav";
// import Footer from "../components/Footer/Footer";
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
import axios from "axios";

class Recipes extends Component {
  state = {
    recipe: {},
    ingredients: [],
    instructions: [],
    ingredientChecked: false,
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
          instructions: res.data.Instructions, 
        });
      }
    );
  };

  ingredientCheck = (id, checkbox) => {
    console.log("HI");
    console.log(checkbox);

    if (checkbox === false) {
      console.log("okay")
      axios.put(`/api/ingredients/${id}`, {
        ingredientObj: {
          ingredient_checkbox: 1
        }
      })
      .then (this.setState({ingredients: this.state.ingredients}));
    } else if (checkbox === true) {
        console.log("no")
        axios.put(`/api/ingredients/${id}`, {
          ingredientObj: {
            ingredient_checkbox: 0
          }
        })
        .then (this.setState({ingredients: this.state.ingredients}));
      }
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
          <p className="recipe-servingsize">Yield: 
          {this.state.recipe.recipe_serving_size ?  //Checks for recipe serving size
            (<span>{this.state.recipe.recipe_serving_size}</span>) : 
            (<span> Unknown - cook it and find out</span>)
          }
          </p>
          {this.state.recipe.recipe_image_url ? //Checks for recipe image
            (<p className="recipe-image"><img src={this.state.recipe.recipe_image_url} alt={this.state.recipe.recipe_name} height="400" /></p>) : 
            (<div class="no-image" height="0"><i class="glyphicon glyphicon-camera"></i></div>)
          }
        </div>

        <div className="ingredient-div">
          <h4 className="recipe-subtitle">INGREDIENTS</h4>
          {this.state.ingredients.length ? ( //Check for Ingredients
            <IngredientList>
              {this.state.ingredients.map(ingredient => (
                <IngredientListItem onClick={() => this.ingredientCheck(ingredient.id, ingredient.ingredient_checkbox)} className={this.state.ingredientChecked? "row ingredientChecklist": "row ingredientChecklistChecked"} key={ingredient.id} data={ingredient} />
              ))}
            </IngredientList>
            ) : (
              <h3 className="ingredientChecklist">No Results to Display</h3>
            )}      
        </div>
        <div className="instruction-div">
          <h4 className="recipe-subtitle">DIRECTIONS</h4>
          {this.state.instructions.length ? ( //Check for Instructions
            <InstructionList>
              {this.state.instructions.map(instruction => (
                <InstructionListItem key={instruction.id} data={instruction} />
              ))}
            </InstructionList>
            ) : (
              <h3 className="instructionChecklist">No Results to Display</h3>
            )} 
        </div>
        
        <p><a target="_blank" href={this.state.recipe.recipe_url} className="recipe-link">{this.state.recipe.recipe_url}</a></p>

        <Panel name="STICKY NOTES" panelfullclass="panel recipe-notes-panel" panelheaderclass="recipe-notes-header">    
            <RecipeNotes data={this.state.recipe.recipe_notes} />
        </Panel>
        
        <div className="container-fluid recipepage-btns">
          <button className="btn recipepage-btn" type="button">EDIT</button>
          <button className="btn recipepage-btn" type="button">DELETE</button>
          <button className="btn recipepage-btn" type="button">NEED TO COOK | COMPLETE</button>
        </div>

        <FooterLogged />
      </div>
    );
  };
};

export default Recipes;
