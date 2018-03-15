import React from "react";

const IngredientList = ({ children }) => (
  <div className="list-overflow-container">
      <ul className="ingredients-list ingredient-text">
        {children}
      </ul>
    </div>
);

export default IngredientList;