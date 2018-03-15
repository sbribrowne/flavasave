import React from "react";

const OrangeHdr = (props) => (
  <div className={props.className}>
    <span>
      <img className={props.orangeHdrImageClass} src={props.photo} alt={props.alt} />
      <h1 className="orangeHdrTitle">{props.name}</h1>
    </span>
  </div>
);

export default OrangeHdr;