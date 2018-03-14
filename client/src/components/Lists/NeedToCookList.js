import React from "react";

const NeedToCookList = ({ children }) => {
  (
    <div className="row">
      <div className="col-md-4 table-header">TITLE</div>
      <div className="col-md-4 table-header">SOURCE</div>
      <div className="col-md-4 table-header">ACTION</div>
      <div className="w-100" />
      {children}
    </div>
  )
};

export default NeedToCookList;
