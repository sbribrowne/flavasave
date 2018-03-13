import React, { Component } from "react";
import Nav from "../components/Nav/Nav.js";
import Input from "../components/Forms/Input.js";
import FormBtn from "../components/Forms/FormBtn.js";
import DropDwn from "../components/Forms/DropDwn.js";
import Panel from "../components/Panels/Panel.js";
import OrangeHdr from "../components/Panels/OrangeHdr.js";
import NeedToCookList from "../components/Lists/NeedToCookList";
import CompleteList from "../components/Lists/CompleteList";
import FooterLogged from "../components/Footer/FooterLogged.js";

class UserPage extends Component {
  //Need an addRecipe method from URL

  //Need SearchRecipe method

  //Need SearchRecipes by tags method

  //Need a get method for Need to Cook Recipes

  //Need a get method for COmpleted REcipes

  render() {
    return (
      <div>
        <Nav />

        <div className="container">
          <h3>ADD RECIPE BY URL</h3>
          <form className="row">
            <Input name="add-recipe" />
            <FormBtn photo={require("../images/add_button.png")} />
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
          <NeedToCookList />
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
      </div>
    );
  }
}

export default UserPage;
