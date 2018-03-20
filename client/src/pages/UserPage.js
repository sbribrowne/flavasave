import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavLogged from "../components/Nav/NavLogged";
import Input from "../components/Forms/Input.js";
import FormBtn from "../components/Buttons/FormBtn.js";
import Buttons from "../components/Buttons/Button.js";
import OrangeHdr from "../components/Panels/OrangeHdr.js";
import NeedToCookList from "../components/Lists/NeedToCookList";
import NTCListItem from "../components/Lists/NTCListItem";
import CompleteList from "../components/Lists/CompleteList";
import CompleteListItem from "../components/Lists/CompleteListItem";
import FooterLogged from "../components/Footer/FooterLogged.js";
import API from "../utils/API";
import axios from "axios";

class UserPage extends Component {
  //set inital state of forms to empty
  state = {
    user: "",
    recipes: ["test", "test"],
    recipe_url: "",
    search_term: "",
    showing_search_results: 0,
    search_tag: ""
  };

  componentWillMount() { //componentDidMount
    this.currentUser();
  }

  //grab user information
  currentUser = () => {
    API.getUserData()
      .then(res => {
        this.setState({ user: res.data });

        if (!res.data.id) {
          document.location.href = window.location.origin;
        } else {
          this.loadRecipes();
        }
      })
      .catch(err => console.log(err));
  };

  //load recipes on page
  loadRecipes = () => {
    API.getRecipes()
      .then(res => {
        this.setState({ recipes: res.data, search_term: "", showing_search_results: 0 });
      })
      .catch(err => console.log(err));
  };

  //axios call to delete recipe in db
  deleteRecipe = id => {
    API.deleteRecipe(id)
      .then(res => this.loadRecipes())
      .catch(err => console.log(err));
  };

  //changes recipe_checkbox field in db to true
  makeTrue = id => {
    axios
      .put(`/api/recipes/${id}`, {
        recipeObj: {
          recipe_checkbox: 1
        }
      })
      .then(res => this.loadRecipes());
  };

  //changes recipe_checkbox field in db to false
  makeFalse = id => {
    axios
      .put(`/api/recipes/${id}`, {
        recipeObj: {
          recipe_checkbox: 0
        }
      })
      .then(res => this.loadRecipes());
  };

  //happens on submit of input
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //axios call and redirect on submit of recipe url
  handleURLSubmit = event => {
    event.preventDefault();
    if (this.state.recipe_url) {
      API.saveRecipe({
        recipe_url: this.state.recipe_url
      })
        .then(res => {
          console.log(res);
          this.setState({
            recipe_url: ""
          });
          if (res.data.status)
            window.location.href = window.location.origin + "/recipe/" + res.data.id;
        })
        .catch(err => console.log(err));
    }

    this.setState({
      recipe_url: '',
    });
  };

  //axios call to db on submit of search / set state to results
  handleSearch = event => {
    event.preventDefault();
    axios.get(`/api/search/${this.state.search_term}`)
      .then(data => {
        this.setState({ recipes: data.data, showing_search_results: 1 });
        document.getElementById("searchresults").scrollIntoView(true); //{ behavior: "smooth", alignTo: 1 }
      });
  };

  //axios call to db on submit of search / set state to results
  handleTagSearch = event => {
    event.preventDefault();
    axios.get(`/api/tags/search/${this.state.search_tag}`)
      .then(data => {
        this.setState({ recipes: data.data, showing_search_results: 1 });
        document.getElementById("searchresults").scrollIntoView(true); //{ behavior: "smooth", alignTo: 1 }
      });
  };

  render() {
    return (
      <div>
        <NavLogged />
        <h1 className="greeting-text">Welcome, {this.state.user.email}!</h1>
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
                onClick={this.handleURLSubmit}
                photo={require("../images/add_button.png")}
                className="search-btn"
                imageclass="imageClass"
              />
            </div>
          </form>

          <h3 className="search-title">SEARCH RECIPES</h3>
          <form className="row">
            <div className="form-group">
              <Input className="input-width"
                value={this.state.search_term}
                onChange={this.handleInputChange}
                name="search_term"
              />
              <FormBtn
                photo={require("../images/search_button.png")}
                className="search-btn"
                imageclass="imageClass"
                onClick={this.handleSearch}
              />
            </div>
          </form>

          <h3 className="search-title">SEARCH BY TAGS</h3>
          <form className="row">
            <div className="form-group">
              <Input className="input-width"
                value={this.state.search_tag}
                onChange={this.handleInputChange}
                name="search_tag"
              />
              <FormBtn
                photo={require("../images/tag_search_button.png")}
                className="search-btn"
                imageclass="tag-search-button"
                onClick={this.handleTagSearch}
              />
            </div>
          </form>
        </div>

        {this.state.showing_search_results ?
          (<div id="searchresults" className="container-fluid userpage-container showing-search-results">
            Search results for: {this.state.search_term ? (this.state.search_term) : (this.state.search_tag)}
            <a href="#" className = "clear-search" onClick={this.loadRecipes}> Clear</a>
          </div>) :
          (<span></span>)
        }

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
              {this.state.recipes.map(
                recipe =>
                  !recipe.recipe_checkbox ? (
                    <NTCListItem key={recipe.id}>
                      <div className="col-md-7 table-item recipe-name">
                        <Link
                          className="table-item"
                          to={"/recipe/" + recipe.id}
                        >
                          {recipe.recipe_name}
                        </Link>
                      </div>
                      <div className="col-md-5 recipe-buttons">
                        <Link
                          className="btn btn-sm up-edit-button"
                          to={"/recipeedit/" + recipe.id}
                        >
                          <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                        </Link>
                        <Buttons onClick={() => this.deleteRecipe(recipe.id)} />
                        <button
                          onClick={() => this.makeTrue(recipe.id)}
                          className="btn up-toggle-button"
                          type="button"
                        >
                          Completed
                        </button>
                      </div>
                    </NTCListItem>
                  ) : (
                      <h1 className="noshow" />
                    )
              )}
            </NeedToCookList>
          ) : (
              <h1 className="no-results">No results to display</h1>
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
              {this.state.recipes.map(
                recipe =>
                  recipe.recipe_checkbox ? (
                    <CompleteListItem key={recipe.id}>
                      <div className="col-md-7 table-item recipe-name">
                        <Link
                          className="table-item"
                          to={"/recipe/" + recipe.id}
                        >
                          {recipe.recipe_name}
                        </Link>
                      </div>
                      <div className="col-md-5 recipe-buttons">
                        <Link
                          className="btn btn-sm up-edit-button"
                          to={"/recipeedit/" + recipe.id}
                        >
                          <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                        </Link>
                        <Buttons onClick={() => this.deleteRecipe(recipe.id)} />
                        <button
                          onClick={() => this.makeFalse(recipe.id)}
                          className="btn up-toggle-button"
                          type="button"
                        >
                          Need To Cook
                        </button>
                      </div>
                    </CompleteListItem>
                  ) : (
                      <h1 className="noshow" />
                    )
              )}
            </CompleteList>
          ) : (
              <h1 className="no-results">No results to display</h1>
            )}
        </div>

        <div className="container-fluid userpage-container">
          <Link to={"/newrecipe"}>
            <button className="btn manual-add-btn" type="button">
              ADD RECIPE MANUALLY
            </button>
          </Link>
        </div>

        <FooterLogged />
      </div>
    );
  }
}

export default UserPage;
