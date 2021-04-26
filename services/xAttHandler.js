const network = require("../config/chainConf");
const WEB3 = require("web3");

async function Stats(req, res) {
  try {
    var fResponse = {
      totalRewards: 1000,
      totalWinningPositions: 5,
      rewardReset: 0,
      criteria: "",
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
      userAttbalance: 0,
      userxAttStake: 0,
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
      userxAttStake: 0,
      userStakePosition: 0,
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
