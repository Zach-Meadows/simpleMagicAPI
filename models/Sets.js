const mongoose = require("../db/connection");

const setSchema = new mongoose.Schema({
  name: String,
  abbr: String,
  type: String,
});

module.exports = mongoose.model("Sets", setSchema);
