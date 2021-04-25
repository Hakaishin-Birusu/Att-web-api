const network = require("../config/chainConfig");
const WEB3 = require("web3");

async function Test(req, res) {
  try {
    console.log("test");
    res.json({ response: "Test" });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

module.exports = {
  Test,
};
