const express = require("express");
const router = express.Router();
const Subtypes = require("../models/subtypes");

router.get("/", (req, res) => {
  Subtypes.find({}).then(type => {
    res.json(type);
  });
});
router.get("/:name", (req, res) => {
  Subtypes.find({ name: req.params.name }).then(type => {
    res.json(type);
  });
});

module.exports = router;
