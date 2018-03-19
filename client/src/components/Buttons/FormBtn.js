import React from "react";

const FormBtn = props =>
  <button {...props}>
    <p> {props.buttonName} <img className={props.imageclass} src={props.photo} /> </p>
  </button>;

export default FormBtn;