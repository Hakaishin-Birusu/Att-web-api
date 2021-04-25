const express = require("express");
const router = express.Router();
const xAttService = require("../services/xAttHandler");

router.get("/stats", function (req, res) {
  xAttService.Stats(req, res);
});

router.get("/stakeinfo/:user", function (req, res) {
  xAttService.StakeInfo(req, res);
});

router.get("/userstake/:user", function (req, res) {
  xAttService.UserStake(req, res);
});

router.get("/userunstake/:user", function (req, res) {
  xAttService.UserUnstake(req, res);
});

module.exports = router;
