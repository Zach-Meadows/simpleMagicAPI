const mongoose = require("../db/connection");

const setSchema = new mongoose.Schema({
  section: Object,
  subrules: Array,
});

module.exports = mongoose.model("Rules", setSchema);
