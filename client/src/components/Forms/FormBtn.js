import React from "react";

const FormBtn = props =>
  <button {...props}>
    <img className={props.imageClass} src={props.photo} />
  </button>;

export default FormBtn;