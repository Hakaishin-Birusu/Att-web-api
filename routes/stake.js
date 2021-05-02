const express = require("express");
const router = express.Router();
const stakeService = require("../services/stakeHandler");

router.get("/stats", function (req, res) {
  stakeService.Stats(req, res);
});

router.get("/userstake/:userAddress", function (req, res) {
  stakeService.UserStake(req, res);
});

router.get("/userunstake/:userAddress", function (req, res) {
  stakeService.UserUnstake(req, res);
});

module.exports = router;
