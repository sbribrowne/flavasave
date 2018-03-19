import React from "react";

const NeedToCookList = ({ children }) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-8 table-header">TITLE</div>
        <div className="col-md-4 table-header">ACTION</div>
        <hr />
      </div>
      <div className="row all-items-row">
        {children}  
      </div>
    </div>
  )
};

export default NeedToCookList;
