const mongoose = require("../db/connection");

const CardSchema = new mongoose.Schema({
  name: String,
  image: String,
  colors: Array,
  types: Array,
  subtypes: Array,
  oracle: String,
  rulings: Array,
  power: Number,
  toughness: Number,
  cost: String,
  loyalty: Number,
});

module.exports = mongoose.model("Cards", CardSchema);
