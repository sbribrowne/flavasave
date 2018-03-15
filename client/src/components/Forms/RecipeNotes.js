import React from "react";

const RecipeNotes = (props) => (
  <div className="recipeNotes">
    <textarea placeholder="Add notes here...">{props.data}</textarea>
    <p>{props.data}</p>
  </div>
);

export default RecipeNotes;