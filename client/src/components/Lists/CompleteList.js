import React from "react";
import CompleteListItem from "./CompleteListItem";
import Buttons from "../Buttons/Button";

const CompleteList = (props) => (
  <div class="row">
    <div class="col-md-4">TITLE</div>
    <div class="col-md-4">SOURCE</div>
    <div class="col-md-4">ACTION</div>
    <div class="w-100"></div>
    <CompleteListItem />
  </div>
);

export default CompleteList;
