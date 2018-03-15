import React from "react";

const InstructionListItem = (props) => (
  <div className="row">
    <div className="col-sm-12 instructionChecklist">{props.data.instruction_info} </div>
  </div>
);

export default InstructionListItem;