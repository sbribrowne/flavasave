const db = require("../models");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  //get ALL ingredients for Recipe
  app.get("/api/ingredients/:recipeId", isAuthenticated, function(req, res) {
    db.Ingredient.findAll({
      where: {
        RecipeId: req.params.recipeId
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  //add new ingredient to recipe - include RecipeId in object
  app.post("/api/ingredients", isAuthenticated, function(req, res) {
    db.Ingredient.create(req.body.ingredientObj).then(function(dbIngredient) {
      res.json(dbIngredient);
    });
  });

  //Edit ingredient
  app.put("/api/ingredients/:recipeId", isAuthenticated, function(req, res) {
    console.log(req.body.ingredientObj.ingredients);

    req.body.ingredientObj.ingredients.map(ingredient => {
      console.log(ingredient.id + " " + ingredient.ingredient_info);
      db.Ingredient.update(
        { ingredient_info: ingredient.ingredient_info },
        {
          where: {
            id: ingredient.id
          }
        }
      ).then(function(dbIngredient) {
        res.send("Sucessful Edit"); //edit complete
      });
    });
  });

  //Edit toggle ingredient
  app.put("/api/ingredients/toggle/:ingredientId", isAuthenticated, function(
    req,
    res
  ) {
    console.log(req.body.ingredientObj.ingredients);
    db.Ingredient.update(req.body.ingredientObj, {
      where: {
        id: req.params.ingredientId
      }
    }).then(function(dbIngredient) {
      res.json(dbIngredient); //edit complete
    });
  });

  //DELETE
  app.delete("/api/ingredients/:ingredientId", isAuthenticated, function(
    req,
    res
  ) {
    db.Ingredient.destroy({
      where: {
        id: req.params.ingredientId
      }
    }).then(function(dbIngredient) {
      res.json(dbIngredient); //deleted
    });
  });
};
