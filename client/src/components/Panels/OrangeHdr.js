import React from "react";

const OrangeHdr = (props) => (
  <div className="panel text-center">
    <span>
      <img src={props.photo} alt={props.alt} />
      <h1>{props.name}</h1>
    </span>
  </div>
);

export default OrangeHdr;