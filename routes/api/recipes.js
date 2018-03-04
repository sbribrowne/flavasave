const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");
const ingredientController = require("../../controllers/ingredientController");

// Matches with "/api/recipes"
router.route("/")
  .get(recipeController.findAll)
  .post(recipeController.create);

// Matches with "/api/recipes/:id"
router
  .route("/:id")
  .get(recipeController.findById)
  .put(recipeController.update)
  .delete(recipeController.remove);

module.exports = router;
