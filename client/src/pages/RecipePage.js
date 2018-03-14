import React, { Component } from "react";
import Panel from "../components/Panels/Panel.js";
// import Nav from "../components/Nav/Nav";
// import Footer from "../components/Footer/Footer";
import IngredientList from "../components/Lists/IngredientList";
import API from "../utils/API";
import "../stylesheets/css/main.css";

class Recipes extends Component {
  state = {
    recipe: []
  }

  // componentDidMount() {
  //   API.getRecipe().then(res => this.setState({ recipe: res.data })
  // );
  // }

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
          <h2>RECIPE NAME GOES HERE</h2>
          <p>Serving Size: GOES HERE</p>
          {/* Stand in IMAGE */}
          <img src={require("../images/salmon.jpg")} alt="Store Image" height="400" />
        </Panel>
        <Panel>
          <h4>INGREDIENTS</h4>
          <IngredientList />
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
      </div>
    );
  };
};

export default Recipes;
