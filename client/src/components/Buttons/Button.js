import React from "react";

const Buttons = props => (
  <span className="userpage-buttons">
    <button className="btn btn-sm up-delete-button" {...props}>
      <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
    </button>
  </span>
);

export default Buttons;