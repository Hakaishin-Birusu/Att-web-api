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
    

    fResponse.currentSupply = parseFloat(
      web3.utils.fromWei(info.supply, "ether")
    ).toFixed(2);
    fResponse.totalAttLocked = parseFloat(
      web3.utils.fromWei(info.attLocked, "gwei")
    ).toFixed(2);
    fResponse.rewardPoolSize = parseFloat(
      web3.utils.fromWei(info.xSafeBalance, "gwei")
    ).toFixed(2);
    fResponse.currentPrice =  parseFloat(info.price / 1e18).toFixed(2);
    fResponse.apy = 100;


    console.log("fResponse",fResponse);
    res.json({ response: fResponse });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

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

    fResponse.userAttbalance = parseFloat(
      web3.utils.fromWei(info.bal, "gwei")
    ).toFixed(2);
    fResponse.userAttValue = parseFloat(
      web3.utils.fromWei(info.estimatedValue, "ether")
    ).toFixed(2);
    fResponse.AttPrice = parseFloat(info.price / 1e18).toFixed(2);

    console.log("fResponse",fResponse);
    res.json({ response: fResponse });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

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

    fResponse.userxAttStake = parseFloat(
      web3.utils.fromWei(info.xBal, "ether")
    ).toFixed(2);
    fResponse.userxAttValue = parseFloat(
      web3.utils.fromWei(info.estimatedValue, "gwei")
    ).toFixed(2);
    fResponse.xAttPrice = parseFloat(info.price / 1e18).toFixed(2);

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
