const express = require("express");
const router = express.Router();
const dashService = require("../services/dashHandler");

router.get("/primarystats", function (req, res) {
  dashService.primaryStats(req, res);
});

// 1. circulating supply
// 2. market cap
// 3. oracle rate
// 4. total holders
// 5. 24 vol
// 6. new holders
// 7. sentiment

router.get("/stats", function (req, res) {
  dashService.Stats(req, res);
});

// 1. Last rebase
// 2. next rebase check
// 3. taget price (on deflation)

module.exports = router;
