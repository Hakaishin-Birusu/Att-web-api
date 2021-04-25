const express = require("express");
const router = express.Router();
const stakeService = require("../services/stakeHandler");

router.get("/stats", function (req, res) {
  stakeService.Stats(req, res);
});

router.get("/stakeinfo/:user", function (req, res) {
  stakeService.StakeInfo(req, res);
});

router.get("/userstake/:user", function (req, res) {
  stakeService.UserStake(req, res);
});

router.get("/userunstake/:user", function (req, res) {
  stakeService.UserUnstake(req, res);
});

module.exports = router;
