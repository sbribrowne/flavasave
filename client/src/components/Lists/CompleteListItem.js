import React from "react";
import Buttons from "../Buttons/Button";

const CompleteListItem = (props) => (
  <div className='row'>
    {props.children}
  </div>
);

export default CompleteListItem;
