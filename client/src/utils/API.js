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
  // Manually add new recipe to the database
  // addManualRecipe: function (recipe) {
  //   console.log(recipe);
  //   return axios.post("/api/manual", recipe)
  //     .then( (data) => {
  //       console.log(data);
  //       return data;
  //     })
  // }
  //
  // Add ingredients to manual recipe

  // Add instructions to manual recipe
};
