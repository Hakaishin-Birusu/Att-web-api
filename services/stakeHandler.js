const network = require("../config/chainConf");
const WEB3 = require("web3");

async function Stats(req, res) {
  try {
    var fResponse = {
      currentSupply: 0,
      totalAttLocked:0,
      rewardPoolSize: 0,
      currentPrice:"",
      criteria: "",
      apy:""

    };
    res.json({ response: fResponse });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

//userStake
async function UserStake(req, res) {
  try {
    var fResponse = {
      userAttbalance: 0,
      userAttValue: 0,
      AttPrice:0
    };
    res.json({ response: fResponse });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

//userUnStake
async function UserUnstake(req, res) {
  try {
    var fResponse = {
      userxAttStake: 0,
      userxAttValue: 0,
      xAttPrice:0
    };
    res.json({ response: fResponse });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

module.exports = {
  Stats,
  UserStake,
  UserUnstake,
};
