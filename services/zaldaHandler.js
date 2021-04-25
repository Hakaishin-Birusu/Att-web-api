const network = require("../config/chainConf");
const WEB3 = require("web3");

async function Stats(req, res) {
  try {
    console.log("test");
    res.json({ response: "Test" });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

async function History(req, res) {
  try {
    console.log("test");
    res.json({ response: "Test" });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

async function Winner(req, res) {
  try {
    console.log("test");
    res.json({ response: "Test" });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

async function UserClaim(req, res) {
  try {
    console.log("test");
    res.json({ response: "Test" });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

module.exports = {
  Stats,
  History,
  Winner,
  UserClaim,
};
