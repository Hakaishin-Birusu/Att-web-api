const express = require("express");
const router = express.Router();
const xAttService = require("../services/xAttHandler");

router.get("/test", function (req, res) {
  xAttService.Test(req, res);
});

module.exports = router;
