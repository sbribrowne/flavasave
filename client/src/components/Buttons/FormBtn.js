import React from "react";

const FormBtn = props =>
  <button {...props}>
    <p> {props.buttonName} <img alt="" className={props.imageclass} src={props.photo} /> </p>
  </button>;

export default FormBtn;