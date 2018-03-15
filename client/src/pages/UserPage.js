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
            <NeedToCookList>
              {this.state.recipes.map(recipe => (
                <NTCListItem key={recipe.id}>
                  <div className="row">
                    <div className='col-md-4 table-item'>
                      <Link to={"/recipes/" + recipe.id}>
                        {recipe.recipe_name}
                      </Link>
                    </div>
                    <div className='col-md-4 table-item'>
                      {recipe.recipe_url}
                    </div>
                    <div class='col-md-4'>
                      <Link className="btn btn-sm up-edit-button" to={"/newRecipe/" + recipe.id}> Edit </Link>
                      <Buttons onClick={() => this.deleteRecipe(recipe.id)} />
                    </div>
                  </div>
                </NTCListItem>
              ))}
            </NeedToCookList>
          ) : (
              <h1 className="table-item">No Results to Display</h1>
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
          <CompleteList />
        </div>

        <div className="container-fluid userpage-container">
          <button className="btn manual-add-btn" type="button">ADD RECIPE MANUALLY</button>
        </div>

        <FooterLogged />
      </div >
    );
  }
}

export default UserPage;
