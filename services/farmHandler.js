const network = require("../config/chainConf");
const WEB3 = require("web3");
const config = require("../contracts/WatchTower.json");

async function StatsLiquid(req, res) {
  try {
    var fResponse = {
      totalStaked: 0,
      totalRewardLeft: 0,
      rewardReset: 0,
      apy: 0,
    };
    const web3 = new WEB3(network.rpc);
    let instance = new web3.eth.Contract(
      config.abi,
      config.address
    );

    let info = await instance.methods.statsLiquid().call();
    console.log("info",info);

    fResponse.totalStaked = info.totalStaked;
    fResponse.totalRewardLeft = info.totalRewardLeft;
    fResponse.rewardReset = info.resetblock;
    fResponse.apy = 100;

    console.log("fResponse",fResponse);
    res.json({ response: fResponse });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

async function UserStakeLiquid(req, res) {
  try {
    const user = req.params.userAddress;
    var fResponse = {
      userbalance: 0,
      userStake: 0,
    };
    const web3 = new WEB3(network.rpc);
    let instance = new web3.eth.Contract(
      config.abi,
      config.address
    );

    let info = await instance.methods.userStakeLiquid(0, user).call();
    console.log("info",info);

    fResponse.userbalance = info.balance;
    fResponse.userStake = info.stake;

    console.log("fResponse",fResponse);
 
    res.json({ response: fResponse });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

async function UserUnstakeLiquid(req, res) {
  try {
    const user = req.params.userAddress;
    var fResponse = {
      userStake: 0,
      userExpectedReturn: 0,
    };
    const web3 = new WEB3(network.rpc);
    let instance = new web3.eth.Contract(
      config.abi,
      config.address
    );

    let info = await instance.methods.userUnstakeLiquid(0,user).call();
    console.log("info",info);

    fResponse.userStake = info.stake;
    fResponse.userExpectedReturn = info.estReturn;

    console.log("fResponse",fResponse);
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
    const web3 = new WEB3(network.rpc);
    let instance = new web3.eth.Contract(
      config.abi,
      config.address
    );

    let info = await instance.methods.statsPledge().call();
    console.log("info",info);

    fResponse.totalStaked = info.totalStaked;
    fResponse.totalRewardLeftAtt = info.totalRewardLeftAtt;
    fResponse.totalRewardLeftBusd = info.totalRewardLeftBusd;
    fResponse.rewardReset = info.endblock;
    fResponse.apy = 100;

    console.log("fResponse",fResponse); 
    res.json({ response: fResponse });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

async function UserStakePledge(req, res) {
  try {
    const user = req.params.userAddress;
    var fResponse = {
      userbalance: 0,
      userStake: 0,
    };
    const web3 = new WEB3(network.rpc);
    let instance = new web3.eth.Contract(
      config.abi,
      config.address
    );

    let info = await instance.methods.userStakePledge(0,user).call();
    console.log("info",info);

    fResponse.userbalance = info.balance;
    fResponse.userStake = info.stake;

    console.log("fResponse",fResponse);
 
    res.json({ response: fResponse });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

async function UserUnstakePledge(req, res) {
  try {
    const user = req.params.userAddress;
    var fResponse = {
      userStake: 0,
      userExpectedReturnAtt: 0,
      userExpectedReturnBusd: 0,
    };
    const web3 = new WEB3(network.rpc);
    let instance = new web3.eth.Contract(
      config.abi,
      config.address
    );

    let info = await instance.methods.userUnstakePledge(0,user).call();
    console.log("info",info);

    fResponse.userStake = info.stake;
    fResponse.userExpectedReturnAtt = info.estReturnAtt;
    fResponse.userExpectedReturnBusd = info.estReturnBusd;

    console.log("fResponse",fResponse);
 
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
