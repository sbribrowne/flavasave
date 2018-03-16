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
  // Deletes the recipe with the given id
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
  // Add new recipe to the database
  // addRecipe: function (recipe) {
  //   console.log(recipe);
  //   return axios.post("/api/recipes", recipe)
  //     .then( (data) => {
  //       console.log(data);
  //       return data;
  //     })
  // }
};
