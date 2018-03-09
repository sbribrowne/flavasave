import React from "react";
import Buttons from "../Buttons/Button";

const CompleteListItem = (props) => (
  <div>
    <div class="col-md-4">{"RECIPE GOES HERE"}</div>
    <div class="col-md-4">{"SOURCE GOES HERE"}</div>
    <div class="col-md-4"><Buttons /></div>
  </div>
);

export default CompleteListItem;