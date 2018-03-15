import React, { Component } from "react";
import Nav from "../components/Nav/Nav.js";
import Input from "../components/Forms/Input.js";
import FormBtn from "../components/Forms/FormBtn.js";
import DropDwn from "../components/Forms/DropDwn.js";
import Panel from "../components/Panels/Panel.js";
import OrangeHdr from "../components/Panels/OrangeHdr.js";
import NeedToCookList from "../components/Lists/NeedToCookList";
import NTCListItem from "../components/Lists/NTCListItem"
import CompleteList from "../components/Lists/CompleteList";
import FooterLogged from "../components/Footer/FooterLogged.js";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Buttons from "../components/Buttons/Button.js"

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
        console.log(res.data);
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
        recipe_url: this.state.recipe_url,
      })
        .then(res => this.loadRecipes())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Nav />

        <div className="container">
          <h3>ADD RECIPE BY URL</h3>
          <form className="row">
            <Input
              value={this.state.recipe_url}
              onChange={this.handleInputChange}
              name="recipe_url"
            />
            <FormBtn
              disabled={!(this.state.recipe_url)}
              onClick={this.handleFormSubmit}
              photo={require("../images/add_button.png")}
            />
          </form>

          <h3>SEARCH RECIPES</h3>
          <form className="row">
            <Input name="search-recipe" />
            <FormBtn photo={require("../images/search_button.png")} />
          </form>

          <h3>SEARCH BY TAGS</h3>
          <form className="row">
            <Input name="search-tags" />
            <FormBtn photo={require("../images/tag_search_button.png")} />
          </form>
        </div>

        <OrangeHdr
          className="container orange-box"
          photo={require("../images/egg_crack_bowl.png")}
          alt={"cracked egg"}
          name={"Need to Cook Recipes"}
        />
        <div className="container">
          {this.state.recipes.length ? (
            <NeedToCookList>
              {this.state.recipes.map(recipe => (
                <NTCListItem key={recipe.id}>
                  <Link to={"/recipes/"}>
                    <div className='col-md-4'>
                      {recipe.recipe_name}
                    </div>
                    <div className='col-md-4'>
                      {recipe.recipe_url}
                    </div>
                  </Link>
                  <div class='col-md-4'>
                    <Buttons onClick={() => this.deleteRecipe(recipe.id)} />
                  </div>
                </NTCListItem>
              ))}
            </NeedToCookList>

          ) : (
              <h3>No Results to Display</h3>
            )}
        </div>

        <OrangeHdr
          className="container orange-box"
          photo={require("../images/fork_knife.png")}
          alt={"utensils"}
          name={"Completed Recipes"}
        />
        <div className="container">
          <CompleteList />
        </div>

        <FooterLogged />
      </div >
    );
  }
};

export default UserPage;
