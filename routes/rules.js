const express = require("express");
const router = express.Router();
const Rules = require("../models/Rules");

router.get("/", (req, res) => {
  Rules.find({}).then(rules => {
    res.json(rules);
  });
});
router.get("/id=:id", (req, res) => {
  Rules.findById(req.params.id).then(rule => {
    res.json(rule);
  });
});
router.get("/:name", (req, res) => {
  Rules.find({ name: req.params.name }).then(rule => {
    res.json(rule);
  });
});

module.exports = router;
