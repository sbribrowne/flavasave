import React from "react";

const RecipeNotes = (props) => (
  <div className="recipeNotes">
    <p className="recipe-notes">{props.data}</p>
  </div>
);

export default RecipeNotes;