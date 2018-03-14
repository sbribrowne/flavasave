import React from "react";
import Buttons from "../Buttons/Button";

const CompleteListItem = props => (
  <div>
    <div className="col-md-4 table-item">{"Recipe goes here"}</div>
    <div className="col-md-4 table-item">{"Source goes here"}</div>
    <div className="col-md-4">
      <Buttons />
    </div>
  </div>
);

export default CompleteListItem;
