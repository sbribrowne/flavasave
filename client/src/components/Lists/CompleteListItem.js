import React from "react";

const CompleteListItem = (props) => (
  <li className="list-group-item">
    <p>{"RECIPE GOES HERE"}
      <button
        className="btn btn-danger btn-lg"
      >Delete</button>
      :
      <button
        className="btn btn-success btn-lg"
      >Edit</button>}
      </p>
  </li>
);

export default CompleteListItem;