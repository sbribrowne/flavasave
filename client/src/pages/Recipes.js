import React from "react";
import NavLogged from "../components/Nav/NavLogged.js";
import Panel from "../components/Panels/Panel.js";
import NeedToCookList from "../components/Lists/NeedToCookList";
import CompleteList from "../components/Lists/CompleteList";

const Recipes = () => {
  return (
    <div>
<<<<<<< HEAD
      <Nav />
      <Panel name={"Need to Cook Recipes"}>
=======
      <NavLogged />
      <Panel name={"Recipes"}>
>>>>>>> upstream/master
        <NeedToCookList />
      </Panel>
      <Panel name={"Complete Recipes"}>
        <CompleteList />
      </Panel>
    </div>
  );
};

export default Recipes;
