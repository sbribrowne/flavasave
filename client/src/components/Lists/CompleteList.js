import React from "react";

const CompleteList = ({ children }) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-7 table-header">TITLE</div>
        <div className="col-md-5 table-header">ACTION</div>
      </div>
      <div className="row all-items-row">
        {children}
      </div>
    </div>
  );
};


export default CompleteList;
