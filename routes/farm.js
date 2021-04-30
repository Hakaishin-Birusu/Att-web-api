const express = require("express");
const router = express.Router();
const farmService = require("../services/farmHandler");

router.get("/statsliquid", function (req, res) {
  farmService.StatsLiquid(req, res);
});

router.get("/userstakeliquid/:user", function (req, res) {
  farmService.UserStakeLiquid(req, res);
});

router.get("/userunstakeliquid/:user", function (req, res) {
  farmService.UserUnstakeLiquid(req, res);
});

router.get("/statspledge", function (req, res) {
  farmService.StatsPledge(req, res);
});

router.get("/userstakepledge/:user", function (req, res) {
  farmService.UserStakePledge(req, res);
});

router.get("/userunstakepledge/:user", function (req, res) {
  farmService.UserUnstakePledge(req, res);
});

module.exports = router;
