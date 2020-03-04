const mongoose = require("../db/connection");

const subtypeSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("Subtypes", subtypeSchema);
