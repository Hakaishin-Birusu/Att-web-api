const express = require("express");
const router = express.Router();
const dashService = require("../services/dashHandler");

router.get("/test", function (req, res) {
  dashService.Test(req, res);
});

module.exports = router;
