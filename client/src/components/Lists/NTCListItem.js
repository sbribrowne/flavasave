import React from "react";
import Buttons from "../Buttons/Button";

const NTCListItem = props => (
  <div>
    <div className="col-md-4">{"RECIPE GOES HERE"}</div>
    <div className="col-md-4">{"SOURCE GOES HERE"}</div>
    <div className="col-md-4">
      <Buttons />
    </div>
  </div>
);

export default NTCListItem;
