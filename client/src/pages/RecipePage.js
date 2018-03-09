import React from "react";
import NavLogged from "../components/Nav/NavLogged.js";
import Panel from "../components/Panels/Panel.js";

const Recipes = () => {
  return (
    <div>
      <NavLogged />
      <Panel>
        {/* Stand in IMAGE */}
        <img src={require("../images/salmon.jpg")} alt="Store Image" height="400" />
      </Panel>
    </div>
  );
};

export default Recipes;
