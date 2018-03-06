const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ingredientSchema = new Schema({
  _id: {type: String, required: true},
  text: String,
  amount: Number,
  unit: String
});

const instructionSchema = new Schema({
  _id: {type: String, required: true},
  text: String
});

const recipeSchema = new Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  url: { type: String, required: true },
  ingredients: [ingredientSchema],
  instructions: [instructionSchema],
  cooked: Boolean,
  imageUrl: String,
  tags: [String],
  notes: String,
  date: { type: Date, default: Date.now }
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
