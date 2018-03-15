import React from "react";

const Buttons = props => (
  <span>
    <button className="btn btn-danger btn-sm" {...props}>Delete</button>
  </span>
);

export default Buttons;