const express = require("express");
const router = express.Router();
const Cards = require("../models/Cards");

router.get("/", (req, res) => {
  Cards.find({}).then(cards => {
    res.json(cards);
  });
});
router.get("/random", (req, res) => {
  let random = Math.ceil(Math.random() * 12953);
  Cards.findOne({ random: random }).then(card => {
    res.json(card);
  });
});
router.get("/:name", (req, res) => {
  Cards.find({ name: req.params.name }).then(card => {
    res.json(card);
  });
});
router.post("/newcard", (req, res) => {
  Cards.create(req.body).then(newCard => {
    res.json(newCard);
  });
});
router.put("/update&id=:id", (req, res) => {
  Cards.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    updatedCard => res.json(updatedCard)
  );
});
router.delete("/delete&id=:id", (req, res) => {
  Cards.findByIdAndDelete(req.params.id).then(deletedCard => {
    res.json(deletedCard);
  });
});

module.exports = router;
