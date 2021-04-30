const network = require("../config/chainConf");
const WEB3 = require("web3");
const config = require("../contracts/WatchTower.json");

async function Stats(req, res) {
  try {
    var fResponse = {
      currentSupply: 0,
      totalAttLocked:0,
      rewardPoolSize: 0,
      currentPrice:"",
      criteria: "stake your ATT and receive more ATT over time",
      apy:""
    };

    const web3 = new WEB3(network.rpc);
    let instance = new web3.eth.Contract(
      config.abi,
      config.address
    );

    let info = await instance.methods.stakeStats().call();
    console.log("info",info);

    fResponse.currentSupply = info.supply;
    fResponse.totalAttLocked = info.attLocked;
    fResponse.rewardPoolSize = info.xSafeBalance;
    fResponse.currentPrice = info.price;
    fResponse.apy = 100;


    console.log("fResponse",fResponse);
    res.json({ response: fResponse });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

//userStake
async function UserStake(req, res) {
  try {

    const user = req.params.userAddress;
    var fResponse = {
      userAttbalance: 0,
      userAttValue: 0,
      AttPrice:0
    };

    const web3 = new WEB3(network.rpc);
    let instance = new web3.eth.Contract(
      config.abi,
      config.address
    );


    let info = await instance.methods.userStake(user).call();
    console.log("info",info);

    fResponse.userAttbalance = info.bal;
    fResponse.userAttValue = info.estimatedValue;
    fResponse.AttPrice = info.price;

    console.log("fResponse",fResponse);
    res.json({ response: fResponse });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

//userUnStake
async function UserUnstake(req, res) {
  try {

    const user = req.params.userAddress;
    var fResponse = {
      userxAttStake: 0,
      userxAttValue: 0,
      xAttPrice:0
    };

    const web3 = new WEB3(network.rpc);
    let instance = new web3.eth.Contract(
      config.abi,
      config.address
    );

    let info = await instance.methods.userUnStake(user).call();
    console.log("info",info);

    fResponse.userxAttStake = info.xBal;
    fResponse.userxAttValue = info.estimatedValue;
    fResponse.xAttPrice = info.price;

    console.log("fResponse",fResponse);
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
