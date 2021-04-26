const express = require("express");
const router = express.Router();
const zeldaService = require("../services/zaldaHandler");

router.get("/stats", function (req, res) {
  zeldaService.Stats(req, res);
});

// 1. total reward per day
// 2. total winning position
// 3. distribution counter
// 4. lottery criteria

router.get("/history/:pnum", function (req, res) {
  zeldaService.History(req, res);
});

// 1. winner history
// 2. winning amount (respective)
// 3. claim/unclaimed

router.get("/winners/", function (req, res) {
  zeldaService.Winner(req, res);
});

// 1. recent winner
// 2. winning amount (respective)
// 3. claim/unclaimed

router.get("/claim/:useraddress", function (req, res) {
  zeldaService.UserClaim(req, res);
});

// 1. is user winner
// 2. user claimed

module.exports = router;
