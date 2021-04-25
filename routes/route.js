const express = require("express");
const router = express.Router();
const testService = require("../services/Test");

router.get("/", function (req, res) {
  res.json({ result: "/Get/:Sucess/" });
});

router.get("/", function (req, res) {
  testService.Test();
});

module.exports = router;
