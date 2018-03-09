import React from "react";
import NTCListItem from "./NTCListItem";
import Buttons from "../Buttons/Button";

const NeedToCookList = (props) => (
  <div class="row">
    <div class="col-md-4">TITLE</div>
    <div class="col-md-4">SOURCE</div>
    <div class="col-md-4">ACTION</div>
    <div class="w-100"></div>
    <NTCListItem />
  </div>
);

export default NeedToCookList;
