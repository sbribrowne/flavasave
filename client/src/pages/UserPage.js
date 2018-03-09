import React from "react";
import NavLogged from "../components/Nav/NavLogged.js";
import Input from "../components/Forms/Input.js";
import FormBtn from "../components/Forms/FormBtn.js";
import DropDwn from "../components/Forms/DropDwn.js";
import Panel from "../components/Panels/Panel.js";
import OrangeHdr from "../components/Panels/OrangeHdr.js";
import NeedToCookList from "../components/Lists/NeedToCookList";
import CompleteList from "../components/Lists/CompleteList";

const UserPage = () => {
  return (
    <div>
      <NavLogged />

      <div class="container">
        <h3>ADD RECIPE BY URL</h3>
        <form class='row'>
          <Input name="add-recipe" />
          <FormBtn photo={require("../images/add_button.png")} />
        </form>

        <h3>SEARCH RECIPES</h3>
        <form class='row'>
          <Input name="search-recipe" />
          <FormBtn photo={require("../images/search_button.png")} />
        </form>

        <h3>SEARCH BY TAGS</h3>
        <form class='row'>
          <Input name="search-tags" />
          <FormBtn photo={require("../images/tag_search_button.png")} />
        </form>
      </div>


      <OrangeHdr class="container orange-box" photo={require("../images/egg_crack_bowl.png")} alt={"cracked egg"} name={"Need to Cook Recipes"} />
      <div class="container">
        <NeedToCookList />
      </div>

      <OrangeHdr class="container orange-box" photo={require("../images/fork_knife.png")} alt={"utensils"} name={"Completed Recipes"} />
      <div class="container">
        <CompleteList />
      </div>

    </div>

  );
};

export default UserPage;
