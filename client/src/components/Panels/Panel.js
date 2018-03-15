import React from "react";

const Panel = (props) => (
  <div className="panel">
    <div className="panel-heading">
      <h1>{props.name}</h1>
    </div>
    <div className="panel-body">
      {props.children}
    </div>
  </div>
);

export default Panel;