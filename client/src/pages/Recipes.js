import React from "react";
import Nav from "../components/Nav/Nav.js";
import Panel from "../components/Panels/Panel.js";
import NeedToCookList from "../components/Lists/NeedToCookList";

const Recipes = () => {
  return (
    <div>
      <Nav />
      <Panel name={"Recipes"}>
        <NeedToCookList />
      </Panel>
    </div>
  );
};

export default Recipes;
