import React from "react";

const NeedToCookList = ({ children }) => {
  return (
    <div className="row">
      <div className="col-md-4">TITLE</div>
      <div className="col-md-4">SOURCE</div>
      <div className="col-md-4">ACTION</div>
      <div className="w-100" />
      {children}
    </div>
  )
};

export default NeedToCookList;
