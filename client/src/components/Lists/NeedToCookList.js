import React from "react";

const NeedToCookList = ({ children }) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-7 table-header">TITLE</div>
        <div className="col-md-5 table-header">ACTION</div>
        <hr />
      </div>
      <div className="row all-items-row">
        {children}  
      </div>
    </div>
  )
};

export default NeedToCookList;
