const express = require("express");
const router = express.Router();
const Types = require("../models/Types");

router.get("/", (req, res) => {
  Types.find({}).then(type => {
    res.json(type);
  });
});
router.get("/:name", (req, res) => {
  Types.find({ name: req.params.name }).then(type => {
    res.json(type);
  });
});

module.exports = router;
