import React from "react";

const InstructionListItem = (props) => (
  <div className="row instructionChecklist">
    <div className="col-sm-1">

    {props.data.instruction_checkbox ? 
      (<i className="glyphicon glyphicon-ok"></i> ) : 
      (<i className="glyphicon glyphicon-remove"></i>) }
    </div>
    <div className="col-sm-11">{props.data.instruction_info} </div>
  </div>
);

export default InstructionListItem;