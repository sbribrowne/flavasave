const db = require("../models");

module.exports = function(app) {

    app.get("/api/instructions/:id", function(req, res){
        //get instructions
        db.Instruction.findAll({
            where: {
                RecipeId: req.params.id
            }
        }).then(function (data) {
            console.log(data);
            res.json(data);
        });
    });

    app.post("/api/instructions", function(req, res){
        //add instructions
        console.log(req.body);
        db.Instruction.create(req.body).then(function (Instruction) {
            res.json(Instruction); //Says RecipeId cannot be null...even when there's a number.
        });
    });

    app.put("/api/instructions/edit/:id", function (req, res) {
        db.Instruction.update({
            instruction_info: req.body.instruction_info,
        }, {
                where: {
                    id: req.params.id
                }
            }).then(function (dbPost) {
            console.log("Edited went through");
            res.json(dbPost);
        });
    });
};