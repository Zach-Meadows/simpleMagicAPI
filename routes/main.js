const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/api/cards");
});
router.use("/api/cards", require("./cards"));
router.use("/api/sets", require("./sets"));
router.use("/api/types", require("./types"));
router.use("/api/rules", require("./rules"));

module.exports = router;
