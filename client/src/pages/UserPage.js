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

      <Panel>
        <h3>ADD RECIPE BY URL</h3>
        <form class='row'>
          <Input name="add-recipe" />
          <FormBtn>Submit</FormBtn>
        </form>

        <h3>SEARCH RECIPES</h3>
        <form class='row'>
          <Input name="search-recipe" />
          <FormBtn>Submit</FormBtn>
        </form>

        <h3>SEARCH BY TAGS</h3>
        <form class='row'>
          <Input name="search-tags" />
          <FormBtn>Submit</FormBtn>
        </form>
      </Panel>

      <OrangeHdr></OrangeHdr>
      <Panel name={"Recipes"}>
        <NeedToCookList />
      </Panel>
      <Panel name={"Complete Recipes"}>
        <CompleteList />
      </Panel>

    </div>

  );
};

export default UserPage;
