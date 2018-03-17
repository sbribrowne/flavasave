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
    ingredient1:"",
    ingredient2: "",
    ingredient3: "",
    ingredient4: "",
    ingredient0: "",
    instruction0:"",
    instruction1: "",
    instruction2: "",
    instruction3: "",
    instruction4: "",
    tag0:"",
    tag1: "",
    tag2: "",
    tag3: "",
    tag4: ""
  }


  componentDidMount() {
    console.log(this.state)
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  };


  handleFormSubmit = event => {
    event.preventDefault();

    // let recipe = { ...this.state.recipe };
    // recipe.recipe_name = this.state.recipe_name;
    // recipe.recipe_serving_size = this.state.recipe_serving_size;

    // let ingredients = [ ...this.state.ingredients ];
    // let instructions = [ ...this.state.instructions ];
    // let tags = [ ...this.state.tags ]

    console.log(this.state)
    API.addManualRecipe({
      recipe_name: this.state.recipe_name,
      recipe_serving_size: this.state.recipe_serving_size,
      ingredients: [
        this.state.ingredient0,
        this.state.ingredient1,
        this.state.ingredient2,
        this.state.ingredient3,
        this.state.ingredient4
      ],
      instuctions:[
        this.state.instruction0,
        this.state.instruction1,
        this.state.instruction2,
        this.state.instruction3,
        this.state.instruction4
      ],
      tags:[
        this.state.tag0,
        this.state.tag1,
        this.state.tag2,
        this.state.tag3,
        this.state.tag4
      ]
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
                  value={this.state.ingredient0}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="ingredient0" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-11">
                <Input
                  value={this.state.ingredient1}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="ingredient1" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-11">
                <Input
                  value={this.state.ingredient2}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="ingredient2" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-11">
                <Input
                  value={this.state.ingredient3}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="ingredient3" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-11">
                <Input
                  value={this.state.ingredient4}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="ingredient4" />
              </div>
            </div>

            <h3 className="ERTitle">INSTRUCTIONS</h3>
            <div className="row">
              <div className="recipe-page-col col-sm-11">
                <Input
                  value={this.state.instruction0}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="instruction0" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-11">
                <Input
                  value={this.state.instruction1}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="instruction1" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-11">
                <Input
                  value={this.state.instruction2}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="instruction2" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-11">
                <Input
                  value={this.state.instruction3}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="instruction3" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-11">
                <Input
                  value={this.state.instruction4}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="instructions4" />
              </div>
            </div>

            <h3 className="ERTitle">TAGS</h3>
            <div className="row">
              <div className="recipe-page-col col-sm-11">
                <Input
                  value={this.state.tag0}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="tag0" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-11">
                <Input
                  value={this.state.tag1}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="tag1" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-11">
                <Input
                  value={this.state.tag2}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="tag2" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-11">
                <Input
                  value={this.state.tag3}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="tag3" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-11">
                <Input
                  value={this.state.tag4}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="tag4" />
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