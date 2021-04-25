const express = require("express");
const router = express.Router();
const zeldaService = require("../services/zaldaHandler");

router.get("/test", function (req, res) {
  zeldaService.Test(req, res);
});

module.exports = router;
