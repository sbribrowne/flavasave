const db = require("../models");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

const Sequelize = require('sequelize');
const op = Sequelize.Op;
const operatorsAliases = {
    $eq: op.eq,
    $or: op.or,
}

module.exports = function (app) {

    //add new tag - include RecipeId in object
    app.post("/api/tags",  isAuthenticated, function (req, res) {
        db.Tag.create(req.body.tagObj)
        .then(function (dbTag) {
            res.json(dbTag);
        });
    });

    //Edit tag
    app.put("/api/tags/:recipeId",  isAuthenticated, function (req, res) {
        
        console.log(req.body.tagObj.tags);

        req.body.tagObj.tags.map(
            tag => {
                console.log(tag.id + " " + tag.tag_name);
                db.Tag.update(
                    { tag_name: tag.tag_name },
                    {
                        where: {
                            id: tag.id
                        }
                    }
                ).then(function (dbTag) {
                    res.send("Sucessful Edit"); //edit complete
                });
            });

    });

    //DELETE
    app.delete("/api/tags/:tagId", isAuthenticated, function (req, res) {
        db.Tag.destroy({ 
            where: {
                id: req.params.tagId
            }
        }).then(function (dbTag) {
                res.json(dbTag); //deleted
            });
    });

    //search by tag
    app.get("/api/tags/search/:tagName", isAuthenticated, function (req, res) {
        //req.params.searchterm
        console.log(req.params.tagName);
        var recipeArray = [];
        db.Tag.findAll({
            where: {
                tag_name: req.params.tagName
            }
          }).then(function (dbTags) {
            dbTags.map(dbTag => {

                recipeArray.push(dbTag.RecipeId);
            });

            console.log(recipeArray);
            db.Recipe.findAll({
                where: {
                  id: recipeArray
                }
              }).then(dbRecipes => {
                res.json(dbRecipes);
            });

          })
          .catch(function (err) {
            res.status(422).json(err)
          });
      });
};