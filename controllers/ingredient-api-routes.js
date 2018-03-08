const db = require("../models");

module.exports = function (app) {
    //get ALL ingredients for Recipe
    app.get("/api/ingredients/:recipeId", function (req, res) {
        db.Ingredient.findAll({
            where: {
                RecipeId: req.params.recipeId
            }
        }).then(function (data) {
            res.json(data);
        });
    });

    //add new ingre to recipe - include RecipeId in object
    app.post("/api/ingredients", function (req, res) {
        db.Ingredient.create(req.body.ingredientObj)
        .then(function (dbIngredient) {
            res.json(dbIngredient);
        });
    });

    //Edit ingre - include RecipeId in object
    app.put("/api/ingredients/:ingredientId", function (req, res) {
        db.Ingredient.update(
            req.body.ingredientObj, {
                where: {
                    id: req.params.ingredientId
                }
            }).then(function (dbIngredient) {
                res.json(dbIngredient); //edit complete
            });
    });

    //DELETE
    app.delete("/api/ingredients/:ingredientId", function (req, res) {
        db.Ingredient.destroy({ 
            where: {
                id: req.params.ingredientId
            }
        }).then(function (dbIngredient) {
                res.json(dbIngredient); //deleted
            });
    });
};