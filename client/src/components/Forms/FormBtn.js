import React from "react";

const FormBtn = props =>
  <button {...props}>
    <img src={props.photo} />
  </button>;

export default FormBtn;