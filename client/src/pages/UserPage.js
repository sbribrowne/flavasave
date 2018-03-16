import React, { Component } from "react";
import NavLogged from "../components/Nav/NavLogged";
import Input from "../components/Forms/Input.js";
import FormBtn from "../components/Forms/FormBtn.js";
import DropDwn from "../components/Forms/DropDwn.js";
import Panel from "../components/Panels/Panel.js";
import OrangeHdr from "../components/Panels/OrangeHdr.js";
import NeedToCookList from "../components/Lists/NeedToCookList";
import NTCListItem from "../components/Lists/NTCListItem";
import CompleteList from "../components/Lists/CompleteList";
import FooterLogged from "../components/Footer/FooterLogged.js";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Buttons from "../components/Buttons/Button.js"
import EditBtn from "../components/Buttons/EditBtn.js";
import axios from "axios";



class UserPage extends Component {
  //set inital state of forms to empty
  state = {
    recipes: [],
    recipe_url: ""
  };

  componentDidMount() {
    this.loadRecipes();
    console.log(this.state.recipes);
  }

  loadRecipes = () => {
    API.getRecipes()
      .then((res) => {
        this.setState({ recipes: res.data })
        console.log(res);
        console.log(this.state.recipes);
      }
      )
      .catch(err => console.log(err));
  };

  deleteRecipe = id => {
    API.deleteRecipe(id)
      .then(res => this.loadRecipes())
      .catch(err => console.log(err));
  };

  makeTrue = id => {

    axios.put(`/api/recipes/${id}`,
      {
        recipeObj: {
          recipe_checkbox: 1
        }
      }
    )
      .then(res => this.loadRecipes());

    /*
    API.updateRecipe(id, {
      recipe_checkbox: 1
    })
      .then(res => this.loadRecipes())
      .catch(err => console.log(err));

      */
  };

  makeFalse = id => {

    axios.put(`/api/recipes/${id}`,
      {
        recipeObj: {
          recipe_checkbox: null
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

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.recipe_url) {
      API.saveRecipe({
        recipe_url: this.state.recipe_url
      })
        .then(res => this.loadRecipes())
        //.then(res => { window.location.href = "http://localhost:3000" + res.data; } )
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <NavLogged />
        <h1 className="greeting-text">WELCOME, TESTING@PLACEHOLDER.COM.</h1>
        <div className="container-fluid userpage-container">
          <h3 className="search-title">ADD RECIPE BY URL</h3>
          <form className="row">
            <div className="form-group">
              <Input
                value={this.state.recipe_url}
                onChange={this.handleInputChange}
                name="recipe_url"
                className="input-width"
              />
              <FormBtn
                disabled={!this.state.recipe_url}
                onClick={this.handleFormSubmit}
                photo={require("../images/add_button.png")}
                className="search-btn"
                imageclass="imageClass"
              />
            </div>
          </form>

          <h3 className="search-title">SEARCH RECIPES</h3>
          <form className="row">
            <div className="form-group">
              <Input name="search-recipe" className="input-width" />
              <FormBtn
                photo={require("../images/search_button.png")}
                className="search-btn"
                imageclass="imageClass"
              />
            </div>
          </form>

          <h3 className="search-title">SEARCH BY TAGS</h3>
          <form className="row">
            <div className="form-group">
              <Input name="search-tags" className="input-width" />
              <FormBtn
                photo={require("../images/tag_search_button.png")}
                className="search-btn"
                imageclass="tag-search-button"
              />
            </div>
          </form>
        </div>

        <OrangeHdr
          photo={require("../images/egg_crack_bowl.png")}
          alt={"cracked egg"}
          name={"NEED TO COOK RECIPES"}
          className="container-fluid orange-box userpage-container"
          orangehdrimageclass="header-image-class"
        />

        <div className="container-fluid userpage-container">
          {this.state.recipes.length ? (
            <CompleteList>
              {this.state.recipes.map(recipe => (

                !recipe.recipe_checkbox ? (
                  <NTCListItem key={recipe.id}>
                    <div className='col-md-7 table-item recipe-name'>
                      <Link className="table-item" to={"/recipe/" + recipe.id}>
                        {recipe.recipe_name}
                      </Link>
                    </div>
                    <div className='col-md-5 recipe-buttons'>
                      <Link className="btn btn-sm up-edit-button" to={"/recipeedit/" + recipe.id}> Edit </Link>
                      <Buttons onClick={() => this.deleteRecipe(recipe.id)} />
                      <button onClick={() => this.makeTrue(recipe.id)} className="btn up-toggle-button" type="button">Need to cook | Complete</button>
                    </div>
                  </NTCListItem>
                ) : (
                    <h1 className="noshow"></h1>
                  )

              ))}
            </CompleteList>
          ) : (
              <h1 className="table-items">No results to display</h1>
            )}

        </div>

        <OrangeHdr
          photo={require("../images/fork_knife.png")}
          alt={"utensils"}
          name={"COMPLETED RECIPES"}
          className="container-fluid orange-box userpage-container"
          orangehdrimageclass="header-image-class"
        />
        <div className="container-fluid userpage-container">
          {this.state.recipes.length ? (
            <CompleteList>
              {this.state.recipes.map(recipe => (
                recipe.recipe_checkbox ? (
                  <NTCListItem key={recipe.id}>
                    <div className='col-md-7 table-item recipe-name'>
                      <Link className="table-item" to={"/recipe/" + recipe.id}>
                        {recipe.recipe_name}
                      </Link>
                    </div>
                    <div className='col-md-5 recipe-buttons'>
                      <Link className="btn btn-sm up-edit-button" to={"/recipeedit/" + recipe.id}> Edit </Link>
                      <Buttons onClick={() => this.deleteRecipe(recipe.id)} />
                      <button onClick={() => this.makeFalse(recipe.id)} className="btn up-toggle-button" type="button">Need to cook | Complete</button>
                    </div>
                  </NTCListItem>
                ) : (
                    <h1 className="noshow">No Results to Display</h1>
                  )
              ))}
            </CompleteList>
          ) : (
              <h1 className="table-items">No results to display</h1>
            )}
        </div>

        <div className="container-fluid userpage-container">
          <Link to={"/newrecipe"}>
            < button className="btn manual-add-btn" type="button">ADD RECIPE MANUALLY</button>
          </Link>
        </div>

        <FooterLogged />
      </div >
    );
  }
}

export default UserPage;
