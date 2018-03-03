const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  ingredients: [String],
  instructions: [String],
  cooked: Boolean,
  imageUrl: String,
  tags: [String],
  notes: String,
  date: { type: Date, default: Date.now }
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
