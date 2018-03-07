import React from "react";

const Panel = (props) => (
  <div className="panel text-center col-md-6">
    <img src={props.image} />
    <h1>{props.name}</h1>
  </div>
);

export default Panel;