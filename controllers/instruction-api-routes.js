const db = require("../models");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
    //get ALL instructions for Recipe
    app.get("/api/instructions/:recipeId", isAuthenticated, function(req, res){
        db.Instruction.findAll({
            where: {
                RecipeId: req.params.recipeId
            }
        }).then(function (dbInstruction) {
            res.json(dbInstruction);
        });
    });

    //add new instructions to recipe - include RecipeId in object
    app.post("/api/instructions", isAuthenticated, function(req, res){
        db.Instruction.create(req.body.instructionObj)
        .then(function (dbInstruction) {
            res.json(dbInstruction);
        });
    });

    //Edit instruction 
    app.put("/api/instructions/:RecipeId", isAuthenticated, function (req, res) {
        req.body.instructionObj.instructions.map(
            instruciton => {
                db.Instruction.update(
                    { instruction_info: instruciton.instruction_info },
                    {
                        where: {
                            id: instruciton.id
                        }
                    }
                ).then(function (dbInstruction) {
                    res.send("Sucessful Edit"); //edit complete
                }); 
            }
        );
    });

    //Edit ingre - include RecipeId in object
   /* app.put("/api/ingredients/:recipeId",  isAuthenticated, function (req, res) {
        
        console.log(req.body.ingredientObj.ingredients);

        req.body.ingredientObj.ingredients.map(
            ingredient => {
                console.log(ingredient.id + " " + ingredient.ingredient_info);
                db.Ingredient.update(
                    { ingredient_info: ingredient.ingredient_info },
                    {
                        where: {
                            id: ingredient.id
                        }
                    }
                ).then(function (dbIngredient) {
                    res.send("Sucessful Edit"); //edit complete
                });;
            });
    });*/

     //DELETE
     app.delete("/api/instructions/:instructionId", isAuthenticated, function (req, res) {
        db.Instruction.destroy({ 
            where: {
                id: req.params.instructionId
            }
        }).then(function (dbInstruction) {
                res.json(dbInstruction); //deleted
            });
    });
};