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
    ingredients: [
      "",
      "",
      "",
      "",
      ""
    ],
    instructions: [
      "",
      "",
      "",
      "",
      ""
    ],
    tags: [
      "",
      "",
      "",
      "",
      ""
    ]
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


  handleFormSubmit = event => {
    event.preventDefault();

    let recipe = { ...this.state.recipe };
    recipe.recipe_name = this.state.recipe_name;
    recipe.recipe_serving_size = this.state.recipe_serving_size;

    let ingredients = [ ...this.state.ingredients ];
    let instructions = [ ...this.state.instructions ];
    let tags = [ ...this.state.tags ]

    console.log(recipe, ingredients, instructions, tags)
    this.setState({ recipe, ingredients, instructions, tags })
    API.addManualRecipe({
      recipe: recipe,
      ingredients: ingredients,
      instructions: instructions,
      tags: tags
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
              <div className="recipe-page-col col-sm-11">
                <Input
                  value={this.state.ingredients[0]}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="ingredients[0]" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-11">
                <Input
                  value={this.state.ingredients[1]}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="ingredients[1]" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-11">
                <Input
                  value={this.state.ingredients[2]}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="ingredients[2]" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-11">
                <Input
                  value={this.state.ingredients[3]}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="ingredients[3]" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-11">
                <Input
                  value={this.state.ingredients[4]}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="ingredients[4]" />
              </div>
            </div>

            <h3 className="ERTitle">INSTRUCTIONS</h3>
            <div className="row">
              <div className="recipe-page-col col-sm-11">
                <Input
                  value={this.state.instructions[0]}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="instructions[0]" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-11">
                <Input
                  value={this.state.instructions[1]}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="instructions[1]" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-11">
                <Input
                  value={this.state.instructions[2]}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="instructions[2]" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-11">
                <Input
                  value={this.state.instructions[3]}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="instructions[3]" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-11">
                <Input
                  value={this.state.instructions[4]}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="instructions[4]" />
              </div>
            </div>

            <h3 className="ERTitle">TAGS</h3>
            <div className="row">
              <div className="recipe-page-col col-sm-11">
                <Input
                  value={this.state.tags[0]}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="tags[0]" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-11">
                <Input
                  value={this.state.tags[1]}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="tags[1]" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-11">
                <Input
                  value={this.state.tags[2]}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="tags[2]" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-11">
                <Input
                  value={this.state.tags[3]}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="tags[3]" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-11">
                <Input
                  value={this.state.tags[4]}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="tags[4]" />
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