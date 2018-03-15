import React from "react";

const InstructionList = ({ children }) => (
  <div className="list-overflow-container">
      <ul className="instructions-list">
        {children}
      </ul>
    </div>
);

export default InstructionList;