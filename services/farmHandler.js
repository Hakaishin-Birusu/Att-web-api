const network = require("../config/chainConf");
const WEB3 = require("web3");

async function StatsLiquid(req, res) {
  try {
    var fResponse = {
      totalStaked: 0,
      totalRewardLeft: 0,
      rewardReset: 0,
      apy: 0,
    };
    res.json({ response: fResponse });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

async function UserStakeLiquid(req, res) {
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

async function UserUnstakeLiquid(req, res) {
  try {
    var fResponse = {
      userStake: 0,
      userExpectedReturn: 0,
    };
    res.json({ response: fResponse });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

async function StatsPledge(req, res) {
  try {
    var fResponse = {
      totalStaked: 0,
      totalRewardLeftAtt: 0,
      totalRewardLeftBusd: 0,
      rewardReset: 0,
      apy: 0,
    };
    res.json({ response: fResponse });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

async function UserStakePledge(req, res) {
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

async function UserUnstakePledge(req, res) {
  try {
    var fResponse = {
      userStake: 0,
      userExpectedReturnAtt: 0,
      userExpectedReturnBusd: 0,
    };
    res.json({ response: fResponse });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

module.exports = {
  StatsLiquid,
  UserStakeLiquid,
  UserUnstakeLiquid,
  StatsPledge,
  UserStakePledge,
  UserUnstakePledge,
};
