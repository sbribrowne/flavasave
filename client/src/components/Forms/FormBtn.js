import React from "react";

const FormBtn = props =>
  <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
    <img src={props.photo} />
  </button>;

export default FormBtn;