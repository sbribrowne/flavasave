import React from "react";
import Nav from "../components/Nav/Nav.js";

const UserPage = () => {
  return (
    <div>
      <Nav />
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
  );
};

export default UserPage;
