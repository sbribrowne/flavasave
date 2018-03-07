import React from "react";
import Nav from "../components/Nav/Nav.js";
import Panel from "../components/Panels/Panel.js";
import NeedToCookList from "../components/Lists/NeedToCookList";
import CompleteList from "../components/Lists/CompleteList";

const Recipes = () => {
  return (
    <div>
      <Nav />
      <Panel name={"Need to Cook Recipes"}>
        <NeedToCookList />
      </Panel>
      <Panel name={"Complete Recipes"}>
        <CompleteList />
      </Panel>
    </div>
  );
};

export default Recipes;
