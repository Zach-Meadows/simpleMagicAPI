const mongoose = require("../db/connection");

const CardSchema = new mongoose.Schema({
  name: String,
  image: String,
  colors: Array,
  types: String,
  random: Number,
  set: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Sets"
  }
});

module.exports = mongoose.model("Cards", CardSchema);
