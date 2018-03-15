import React from "react";

const Panel = (props) => (
  <div className={props.panelfullclass}>
    <div className={props.panelheaderclass}>
      <h1 className="panel-header">{props.name}</h1>
    </div>
    <div className="panel-body">
      {props.children}
    </div>
  </div>
);

export default Panel;