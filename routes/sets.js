const express = require("express");
const router = express.Router();
const Sets = require("../models/Sets");

router.get("/", (req, res) => {
  Sets.find({}).then(sets => {
    res.json(sets);
  });
});
router.get("/id=:id", (req, res) => {
  Sets.findById(req.params.id).then(set => {
    res.json(set);
  });
});
router.get("/:name", (req, res) => {
  Sets.find({ name: req.params.name }).then(set => {
    res.json(set);
  });
});

router.post("/newset", (req, res) => {
  Sets.create(req.body).then(newSet => {
    res.json(newSet);
  });
});
router.put("/update&id=:id", (req, res) => {
  Sets.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    updatedSet => res.json(updatedSet)
  );
});

module.exports = router;
