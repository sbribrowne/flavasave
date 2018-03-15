import React from "react";

const NeedToCookList = ({ children }) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-4 table-header">TITLE</div>
        <div className="col-md-5 table-header">SOURCE</div>
        <div className="col-md-3 table-header recipe-buttons">ACTION</div>
        <div className="w-100" />
      </div>
      <div className="row recipe-item-row">
        {children}  
      </div>
    </div>
  )
};

export default NeedToCookList;
