import React from "react";

const IngredientListItem = (props) => (
  <div className="row ingredientChecklist">
    <div className="col-sm-1">

    {props.data.ingredient_checkbox ? 
      (<i className="glyphicon glyphicon-ok"></i> ) : 
      (<i className="glyphicon glyphicon-remove"></i>) }
    </div>
    <div className="col-sm-11">{props.data.ingredient_info} </div>
  </div>
);

export default IngredientListItem;