import React from "react";
import NavLogged from "../components/Nav/NavLogged.js";
import Panel from "../components/Panels/Panel.js";
import NeedToCookList from "../components/Lists/NeedToCookList";

const Recipes = () => {
  return (
    <div>
      <NavLogged />
      <Panel name={"Recipes"}>
        <NeedToCookList />
      </Panel>
    </div>
  );
};

export default Recipes;
