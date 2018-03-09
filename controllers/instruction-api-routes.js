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

    //Edit instruction - include RecipeId in object
    app.put("/api/instructions/:instructionId", isAuthenticated, function (req, res) {
        db.Instruction.update(
            req.body.instructionObj, {
                where: {
                    id: req.params.instructionId
                }
            }).then(function (dbInstruction) {
                res.json(dbInstruction);
        });
    });

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