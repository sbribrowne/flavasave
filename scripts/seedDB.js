//import { TestScheduler } from "rx";

const db = require("../models");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
//syncs sequelize models and waits till update complete before starting server
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});

const userSeed = {
  email: "test@test.test",
  password: "password"
};

const recipeSeed = {
  recipe_url: "http://www.test.com",
  recipe_name: "Test Rec",

  UserId: ""
};

const ingredientSeed = {
  ingredient_info: "Test Ingr",
  RecipeId: ""
};

const instructionSeed = {
  instruction_info: "Test Instruction",
  RecipeId: ""
};

const tagSeed = {
  tag_name: "tag",
  RecipeId: ""  
};

//db.Recipe.create({});

db.User.create(userSeed)
  .then(function (dbUser) {
    recipeSeed.UserId = dbUser.dataValues.id;
    db.Recipe.create(recipeSeed)
      .then(function (dbRecipe) {
        ingredientSeed.RecipeId = dbRecipe.dataValues.id;
        db.Ingredient.create(ingredientSeed)
          .then(function (dbIngr) {
            instructionSeed.RecipeId = dbRecipe.dataValues.id;
            db.Instruction.create(instructionSeed)
              .then(function (dbInst) {
                tagSeed.RecipeId = dbRecipe.dataValues.id;
                db.Tag.create(tagSeed)
                  .then(function (dbTags) {
                    console.log(dbTags);
                  }).catch(function (error){ console.log(error) });
                }).catch(function (error){ console.log(error) });
              }).catch(function (error){ console.log(error) });
            }).catch(function (error){ console.log(error) });
          }).catch(function (error){ console.log(error) });
            


  /*.catch(function (error){ console.log(error) }; */