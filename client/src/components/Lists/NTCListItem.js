import React from "react";

const NTCListItem = (props) => (
  <li className="list-group-item">
    {"RECIPE GOES HERE"}
      <button
        className="btn btn-danger btn-lg"
      >Delete</button>
      :
      <button
        className="btn btn-success btn-lg"
      >Edit</button>
      
  </li>
);

export default NTCListItem;