import React from "react";
import NavLogged from "../components/Nav/NavLogged.js";
import Panel from "../components/Panels/Panel.js";
import NeedToCookList from "../components/Lists/NeedToCookList";
import CompleteList from "../components/Lists/CompleteList";

const Recipes = () => {
  return (
    <div>
      <NavLogged />
      <Panel name={"Recipes"}>
        <NeedToCookList />
      </Panel>
      <Panel name={"Complete Recipes"}>
        <CompleteList />
      </Panel>
    </div>
  );
};

export default Recipes;
