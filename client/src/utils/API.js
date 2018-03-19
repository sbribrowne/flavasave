import axios from "axios";

export default {
  // Gets all recipes
  getRecipes: function () {
    return axios.get("/api/recipes");
  },
  // Gets the recipe with the given id
  getRecipe: function (id) {
    return axios.get(`/api/recipes/${id}`);
  },
  updateRecipe: function (id, object) {
    console.log(id);
    console.log(object);
    return axios.put(`/api/recipes/${id}`, object);
  },
  // Deletes the ingredient with the given id
  deleteIngredient: function (id) {
    return axios.delete(`/api/ingredients/${id}`);
  },
  // Deletes the instruction with the given id
  deleteInstruction: function (id) {
    return axios.delete(`/api/instructions/${id}`);
  },
  // Deletes the tag with the given id
  deleteTag: function (id) {
    return axios.delete(`/api/tags/${id}`);
  },
  // Deletes the ingredient with the given id
  deleteRecipe: function (id) {
    return axios.delete(`/api/recipes/${id}`);
  },
  // Saves a recipe to the database by URL
  saveRecipe: function (newURL) {
    console.log(newURL);
    return axios.post("/api/recipes", newURL)
      .then(function (data) {
        console.log(data);
        return data;
      })
  },
  newIngredient: function (ingredient) {
    return axios.post("/api/ingedients", ingredient)
      .then(function (data) {
        console.log(data);
        return data;
      })
  },
  newInstruction: function (instruction) {
    return axios.post("/api/instructions", instruction)
      .then(function (data) {
        console.log(data);
        return data;
      })
  },
  // Gets the user data with give id
  getUserData: function () {
    return axios.get("/api/user_data");
  },
  // Manually add new recipe to the database
  addManualRecipe: function (stateObj) {
    console.log(stateObj);
    return axios.post("/api/manual", stateObj)
      .then((data) => {
        console.log(data);
        return data;
      })
  }
  //
  // Add ingredients to manual recipe

  // Add instructions to manual recipe
};
