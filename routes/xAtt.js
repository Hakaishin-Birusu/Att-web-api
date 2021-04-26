const express = require("express");
const router = express.Router();
const xAttService = require("../services/xAttHandler");

router.get("/stats", function (req, res) {
  xAttService.Stats(req, res);
});
// 1. total staked
// 2. total reward
// 3. reward resets timer
// 4. apy
// 5. reward multiplier
// 6. xAtt price

router.get("/stakeinfo/:user", function (req, res) {
  xAttService.StakeInfo(req, res);
});

// may be removed

router.get("/userstake/:user", function (req, res) {
  xAttService.UserStake(req, res);
});

// 1. user balance
// 2. current position

router.get("/userunstake/:user", function (req, res) {
  xAttService.UserUnstake(req, res);
});

// 1. user staked balance
// 2. expected return

module.exports = router;
