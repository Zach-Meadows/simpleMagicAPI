const express = require("express");
const router = express.Router();
const Cards = require("../models/Cards");

router.get("/", (req, res) => {
  Cards.find({}).then(cards => {
    res.json(cards);
  });
});
router.get("/id=:id", (req, res) => {
  Cards.findById(req.params.id).then(card => {
    res.json(card);
  });
});
router.get("/:name", (req, res) => {
  Cards.find({ name: req.params.name }).then(card => {
    res.json(card);
  });
});

module.exports = router;
