import React from "react";
import NTCListItem from "./NTCListItem";
import Buttons from "../Buttons/Button";

const NeedToCookList = props => (
  <div className="row">
    <div className="col-md-4">TITLE</div>
    <div className="col-md-4">SOURCE</div>
    <div className="col-md-4">ACTION</div>
    <div className="w-100" />
    <NTCListItem />
  </div>
);

export default NeedToCookList;
