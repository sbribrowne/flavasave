const db = require("../models");
const request = require('request');
const cheerio = require('cheerio');
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

//global variables - THIS IS BAD
var recipeImageUrl = "";
var recipeServingSize = "";

module.exports = function (app) {

  //GET ALL RECIPES
  app.get("/api/recipes", isAuthenticated, function (req, res) {
    //check that logged in. pass user_id to callback
    console.log(isAuthenticated);
    db.Recipe.findAll({
        where: {
          UserId: req.user.id
        }
      }).then(function (dbRecipe) {
        res.json(dbRecipe); //returns all recipes JSON   
      })
      .catch(function (err) {
        res.status(422).json(err)
      });
  });

  //GET 1 Recipe and Ingredients & Instructions
  app.get("/api/recipes/:recipeId", isAuthenticated, function (req, res) {
    console.log('api/recipes/id');
    console.log("req.user: " + JSON.stringify(req.user));
    db.Recipe.findOne({
      where: {
        id: req.params.recipeId
      },
      include: [{
          model: db.Ingredient
        },
        {
          model: db.Instruction
        }
      ]
    }).then(function (dbRecipe) {
      console.log("dbRecipe");
      console.log(dbRecipe);
      if (dbRecipe && dbRecipe.dataValues.UserId === req.user.id)
        res.json(dbRecipe); //returns 1 recipe and ingreds/instrs
      else
        res.send({recipe_name: "Not your recipe. dbRecipe.dataValues.UserId does not match req.user.id"});

      //res.json(dbRecipe); //returns 1 recipe and ingreds/instrs
    });
  });

  // DELETES RECIPE
  app.delete("/api/recipes/:id", isAuthenticated, function (req, res) {
    db.Ingredient.destroy({ //delete all Ingr
      where: {
        RecipeId: req.params.id
      }
    }).then(function (dataIngr) {
      db.Instruction.destroy({ //delete all Instr
        where: {
          RecipeId: req.params.id
        }
      }).then(function (dataInstr) {
        try {
          db.Recipe.destroy({ //delete Recipe
            where: {
              id: req.params.id
            }
          }).then(function (dataRec) {
            res.send(req.params.id); //returns ID of deleted recipe
          });
        } catch (err) {
          console.log(err);
        }

      });

    });


  });

  //Updated recipe, including toggles checkbox
  app.put("/api/recipes/:id", isAuthenticated, function (req, res) { //get recipeObj from AJAX call
    console.log("req.body");
    console.log(req.body);
    db.Recipe.update(
        req.body.recipeObj, {
          where: {
            id: req.params.id
          }
        })
      .then(function (dbPost) {
        res.json(dbPost); //edit complete
      });
  });

  //Adds a recipe from a URL
  app.post("/api/recipes", isAuthenticated, function (req, res) {
    var newUrl = req.body.recipe_url;


    request(newUrl, function (error, response, body) {
      if (error) throw error;

      // If the request was successful...
      if (response.statusCode === 200 && req.user) {
        const $ = cheerio.load(body); //load HTML into cheerio

        if (req.user) { //await
          db.Recipe.create({
              recipe_url: newUrl,
              recipe_name: $("title").text().trim().substr(0, 60),
              recipe_notes: "Notes go here",
              recipe_image_url: "",
              recipe_serving_size: "",
              UserId: req.user.id //get user
            })
            .then(function (responseRecipe) {
              var recipeId = responseRecipe.dataValues.id; //user recipe id of ingr and instr

              var ingredsArrayTemp = parseItempropIngredients($, recipeId);
              if (!ingredsArrayTemp.length) { //check if no ingreds
                ingredsArrayTemp[0] = {
                  ingredient_info: "No Ingredients Detected",
                  RecipeId: recipeId
                };
              }
              db.Ingredient.bulkCreate(ingredsArrayTemp, {
                  individualHooks: true
                })
                .then(function (responseIngredient) {
                  var instructionsArrayTemp = parseItempropInstructions($, recipeId);
                  if (!instructionsArrayTemp.length) { //check if no instructions
                    instructionsArrayTemp[0] = {
                      instruction_info: "No Instructions Detected",
                      RecipeId: recipeId
                    };
                  }
                  db.Instruction.bulkCreate(instructionsArrayTemp, {
                      individualHooks: true
                    })
                    .then(function (responseInstruction) {
                      var bigObject = {
                        recipe: responseRecipe,
                        ingredients: responseIngredient,
                        instructions: responseInstruction
                      };
                      //console.log(bigObject);
                      /*res.json( { 
                          recipeId: responseRecipe.id,
                          recipeName: responseRecipe.recipe_name,
                          recipeUrl: `/recipe/${responseRecipe.id}`
                      });*/ //returns Response object

                      db.Recipe.update({
                        recipe_image_url: recipeImageUrl,
                        recipe_serving_size: recipeServingSize
                      }, {
                        where: {
                          id: recipeId
                        }
                      }).then(function (dbRecipeUpdate) {
                        console.log("recipeImageUrl");
                        console.log(recipeImageUrl);
                        console.log("recipeServingSize");
                        console.log(recipeServingSize);
                        res.send(`/recipe/${responseRecipe.id}`);
                      });




                    })
                    .catch(function (error) {
                      res.json(error);
                    });
                })
                .catch(function (error) {
                  res.json(error);
                });


            }).catch(function (error) {
              res.json(error);
            });

          //removed create user
        } //end IF user

      } //end succesfull response
    });
  }); //END post api/recipe

  app.get("/api/search/:searchterm", isAuthenticated, function (req, res) {
    //req.params.searchterm
    console.log(req.params.searchterm);
    db.Recipe.findAll({
        where: {
          UserId: req.user.id,
          recipe_name: {
            $like: `%${req.params.searchterm}%`
          }
        }
      }).then(function (dbRecipe) {
        res.json(dbRecipe); //returns all recipes JSON   
      })
      .catch(function (err) {
        res.status(422).json(err)
      });
    //res.send(`You searched for ${req.params.searchterm}`);
  });


  app.post("/api/manual", isAuthenticated, function (req, res) {
    console.log(req.body)

    if (req.user) {
      db.Recipe.create({
        UserId: req.user.id //get user
      })
      // .then( (newRecipe) => {
      //   const recipeId = newRecipe.dataValues.id; //user recipe id of ingr and instr
      //   const ingredientArray;
        
      // })
    }
  });
  //Adds a blank recipe for manual creation/updating
  // app.post("/api/manual", isAuthenticated, function (req, res) {

  //   if (req.user) { //await
  //     db.Recipe.create({
  //         recipe_name: "",
  //         recipe_notes: "Notes go here",
  //         recipe_image_url: "",
  //         recipe_serving_size: "",
  //         UserId: req.user.id //get user
  //       })
  //       .then(function (blankRecipe) {
  //         var recipeId = responseRecipe.dataValues.id; //user recipe id of ingr and instr
  //         var ingredientTempArray = [];

  //         if (!ingredientTempArray.length) { // check if ingredient array is empty
  //           ingredientTempArray[0] = {
  //             ingredient_info: "",
  //             RecipeId: recipeId
  //           };
  //         }
  //         db.Ingredient.create(ingredientTempArray, {
  //             individualHooks: true
  //           })
  //           .then(function (blankIngredient) {
  //             var instructionsArrayTemp = [];
  //             if (!instructionsArrayTemp.length) { //check if no instructions
  //               instructionsArrayTemp[0] = {
  //                 instruction_info: "No Instructions Detected",
  //                 RecipeId: recipeId
  //               };
  //             }
  //             db.Instruction.bulkCreate(instructionsArrayTemp, {
  //               individualHooks: true
  //             })
  //           })
  //           .then(function (blankInstruction) {
  //             var bigObject = {
  //               recipe: blankRecipe,
  //               ingredient: blankIngredient,
  //               instructions: blankInstruction
  //             };
  //           }).then(function (bigObject) {
  //             console.log(bigObject);
  //             res.send(`/recipe/${responseRecipe.id}`);
  //           })

  //           .catch(function (error) {
  //             res.json(error);
  //           });
  //       })
  //       .catch(function (error) {
  //         res.json(error);
  //       })
  //       .catch(function (error) {
  //         res.json(error);
  //       });
  //   };
  // });

}; //END MODULE EXPOERTS



/*
function parseImageUrl($){
     //Look for JSON object in page
     $("script").each(function () {
        // if (
        //     $(this).attr("type") !== "application/ld+json" ||
        //     JSON.parse($(this).html())["@type"] !== "Recipe") {
        //     return console.log("error");
        // }

        if ($(this).attr("type") === "application/ld+json") {
            if (JSON.parse($(this).html())["@type"] === "Recipe") {
                if (JSON.parse($(this).html())["image"]) {
                    console.log("parseImageUrl IMAGE FOUND JSON ");
                    console.log(JSON.parse($(this).html())["image"]);
                    return JSON.parse($(this).html())["image"];
                }else  
                    console.log("No Image");
            } else
                console.log("No Recipe in JSON OBJ");
        } else
            console.log("No JSON Obj");
    }); //end paring JSON Schema

    $('[itemprop]').map(function (i, el) { //get list of elements with itemprop attr
        // this === el 
        if ($(this).attr("itemprop").match(/image/)){ //all itemprops that match image
            console.log("parseImageUrl IMAGE FOUND 2");
            console.log( $(this)[0].attribs.src );
            return $(this)[0].attribs.src;
        }
    });

}
*/

function parseItempropIngredients($, recipeId) {
  var ingredientsArray = [];
  var jsonFound = false;

  //Look for JSON object in page
  $("script").each(function () {
    if ($(this).attr("type") === "application/ld+json") {
      if (JSON.parse($(this).html())["@type"] === "Recipe") {
        if (JSON.parse($(this).html())["recipeIngredient"]) {
          ingredientsArray = JSON.parse($(this).html())["recipeIngredient"];
          jsonFound = true;
          console.log(ingredientsArray);
        } else
          console.log("No Ingredients");

        if (JSON.parse($(this).html())["image"]) {
          console.log("IMAGE FOUND");
          recipeImageUrl = JSON.parse($(this).html())["image"];
        } else
          console.log("No Image");

        if (JSON.parse($(this).html())["recipeYield"]) {
          console.log("Serving Size");
          console.log($(this).text());
          recipeServingSize = JSON.parse($(this).html())["recipeYield"];
        } else
          console.log("No Serving Size");

      } else //if Recipe Schema Exists
        console.log("No Recipe in JSON OBJ");
    } else
      console.log("No JSON Obj");
  });

  if (jsonFound && ingredientsArray.length) { //push objects with RecipeID
    for (let i = 0; i < ingredientsArray.length; i++) {
      ingredientsArray[i] = {
        ingredient_info: ingredientsArray[i],
        RecipeId: recipeId
      };
    }
  }

  if (!ingredientsArray.length) { //check that no JSON obj in page then continue parsing
    //$('[itemprop="ingredients"]')
    $('[itemprop]').map(function (i, el) { //get list of elements with itemprop attr
      // this === el 
      if ($(this).attr("itemprop").match(/ngredient/)) { //all itemprops that match I/ingredient
        ingredientsArray.push({
          ingredient_info: $(this).text(),
          RecipeId: recipeId
        }); //pushes an object
      }

      if ($(this).attr("itemprop").match(/image/)) { //all itemprops that match image
        console.log("IMAGE FOUND 2");
        console.log($(this)[0].attribs.src);
        recipeImageUrl = $(this)[0].attribs.src;
      }

      if ($(this).attr("itemprop").match(/recipeYield/)) { //all itemprops that match yield
        console.log("Serving Size 2");
        console.log($(this).text());
        recipeServingSize = $(this).text();
      }
    });
  }


  return ingredientsArray;
}

function parseItempropInstructions($, recipeId) {
  var instructionsArray = [];
  var instructionArrayClean = [];
  var jsonFound = false;

  //Look for JSON object in page
  $("script").each(function () {
    if ($(this).attr("type") === "application/ld+json") {
      if (JSON.parse($(this).html())["@type"] === "Recipe") {
        if (JSON.parse($(this).html())["recipeInstructions"]) {
          instructionArrayClean = JSON.parse($(this).html())["recipeInstructions"].split(". ");
          jsonFound = true;
          console.log(instructionArrayClean);
        } else
          console.log("No Instructions");
      } else
        console.log("No Recipe in JSON OBJ");
    } else
      console.log("No JSON Obj");
  });

  if (jsonFound && instructionArrayClean.length) { //push objects with RecipeID
    for (let i = 0; i < instructionArrayClean.length; i++) {
      instructionArrayClean[i] = {
        instruction_info: (i + 1) + ". " + instructionArrayClean[i] + ".",
        RecipeId: recipeId
      };
    }
  }

  if (!instructionArrayClean.length) { //if no JSON obj in page then continue parsing
    $('[itemprop]').map(function (i, el) { //get list of elements with itemprop attr
      // this === el
      if ($(this).attr("itemprop").match(/nstructions/)) { //all itemprops that match I/instructions
        console.log("instructionsArray: " + i + " : " + el + " : " + $(this).text().split('\n'));
        instructionsArray.push($(this).text().split('\n')); //split items by line breaks
      }
    });
  }

  var counter = 0;
  for (let i = 0; i < instructionsArray.length; i++) { //Run through array of arrays and put all instructions in order
    for (let j = 0; j < instructionsArray[i].length; j++) {
      console.log("original: " + instructionsArray[i][j].length);
      console.log("space removed: " + instructionsArray[i][j].replace(/\s\s+/g, ' ').length);
      if (instructionsArray[i][j].replace(/\s\s+/g, ' ').length > 20) {
        counter++;
        instructionArrayClean.push({
          instruction_info: counter + ". " + instructionsArray[i][j],
          RecipeId: recipeId
        });
      }
    }
  }
  return instructionArrayClean;
}

function cleanArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (!array[i] || array[i].length < 5)
      remove(array, i);
  }
}

function remove(array, index) {

  if (index !== -1) {
    array.splice(index, 1);
  }
}