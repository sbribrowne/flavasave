import React from "react";
import NavLogged from "../components/Nav/NavLogged.js";
import Input from "../components/Forms/Input.js";
import FormBtn from "../components/Forms/FormBtn.js";
import DropDwn from "../components/Forms/DropDwn.js";

const UserPage = () => {
  return (
    <div>
      <NavLogged />

      <div>
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
      </div>
    </div>
  );
};

export default UserPage;
