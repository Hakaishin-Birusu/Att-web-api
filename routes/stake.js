const express = require("express");
const router = express.Router();
const stakeService = require("../services/stakeHandler");

router.get("/test", function (req, res) {
  stakeService.Test(req, res);
});

module.exports = router;
