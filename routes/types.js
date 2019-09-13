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
router.post("/newtype", (req, res) => {
  Types.create(req.body).then(newType => {
    res.json(newType);
  });
});
router.put("/update&id=:id", (req, res) => {
  Types.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    updatedType => res.json(updatedType)
  );
});

module.exports = router;
