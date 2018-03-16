import React from "react";

const NeedToCookList = ({ children }) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-7 table-header">TITLE</div>
        <div className="col-md-5 table-header recipe-buttons">ACTION</div>
        <hr />
      </div>
      <div className="row recipe-item-row">
        {children}  
      </div>
    </div>
  )
};

export default NeedToCookList;
