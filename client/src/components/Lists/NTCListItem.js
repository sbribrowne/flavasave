import React from "react";
import Buttons from "../Buttons/Button";

const NTCListItem = props => (
  <div>
    <div className="col-md-4 table-item">{props.chidren}</div>
    <div className="col-md-4 table-item">{props.children}</div>
    <div className="col-md-4">
      <Buttons />
    </div>
  </div>
);

export default NTCListItem;
