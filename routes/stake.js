const express = require("express");
const router = express.Router();
const stakeService = require("../services/stakeHandler");

router.get("/stats", function (req, res) {
  stakeService.Stats(req, res);
});

// 1. total staked
// 2. total reward
// 3. reward resets timer
// 4. apy
// 5. reward multiplier

router.get("/stakeinfo/:user", function (req, res) {
  stakeService.StakeInfo(req, res);
});

// may be removed

router.get("/userstake/:user", function (req, res) {
  stakeService.UserStake(req, res);
});

// 1. user balance

router.get("/userunstake/:user", function (req, res) {
  stakeService.UserUnstake(req, res);
});

// 1. user staked balance
// 2. expected return

module.exports = router;
