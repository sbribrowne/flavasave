import React from "react";
import CompleteListItem from "./CompleteListItem";

const CompleteList = props => (
  <div className="row">
    <div className="col-md-4">TITLE</div>
    <div className="col-md-4">SOURCE</div>
    <div className="col-md-4">ACTION</div>
    <div className="w-100" />
    <CompleteListItem />
  </div>
);

export default CompleteList;
