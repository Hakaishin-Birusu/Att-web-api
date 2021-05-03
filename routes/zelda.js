const express = require("express");
const router = express.Router();
const zeldaService = require("../services/zaldaHandler");

router.get("/stats", function (req, res) {
  zeldaService.Stats(req, res);
});

router.get("/history/:pnum", function (req, res) {
  zeldaService.History(req, res);
});

router.get("/claim/:useraddress", function (req, res) {
  zeldaService.UserClaim(req, res);
});

module.exports = router;
