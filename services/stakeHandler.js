const network = require("../config/chainConf");
const WEB3 = require("web3");

async function Stats(req, res) {
  try {
    var fResponse = {
      totalStaked: 0,
      totalReward: 0,
      rewardReset: 0,
      rewardMultiplier: 1,
      apy: 0,
    };
    res.json({ response: fResponse });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

async function UserStake(req, res) {
  try {
    var fResponse = {
      userbalance: 0,
      userStake: 0,
    };
    res.json({ response: fResponse });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

async function UserUnstake(req, res) {
  try {
    var fResponse = {
      userStake: 0,
      expectedReturn: 0,
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
