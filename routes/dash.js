const express = require("express");
const router = express.Router();
const dashService = require("../services/dashHandler");

router.get("/primarystats", function (req, res) {
  dashService.primaryStats(req, res);
});

router.get("/stats", function (req, res) {
  dashService.Stats(req, res);
});

module.exports = router;
