import React from "react";

const Panel = (props) => (
  <div className="panel text-center col-md-6">
    <img>{props.image}</img>
    <h1>{props.name}</h1>
  </div>
);

export default Panel;