const mongoose = require("../db/connection");

const typeSchema = new mongoose.Schema({
  name: String,
  isPermanent: Boolean,
});

module.exports = mongoose.model("Types", typeSchema);
