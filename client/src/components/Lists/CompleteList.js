import React from "react";
import CompleteListItem from "./CompleteListItem";

const CompleteList = props => (
  <div className="row">
    <div className="col-md-4 table-header">TITLE</div>
    <div className="col-md-4 table-header">SOURCE</div>
    <div className="col-md-4 table-header">ACTION</div>
    <div className="w-100" />
    <CompleteListItem />
  </div>
);

export default CompleteList;
