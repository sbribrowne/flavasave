import React from "react";

const Buttons = props => (
  <span className="userpage-buttons">
    <button className="btn btn-danger btn-sm up-delete-button" {...props}>Delete</button>
  </span>
);

export default Buttons;