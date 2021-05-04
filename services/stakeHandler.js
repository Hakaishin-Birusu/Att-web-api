const network = require("../config/chainConf");
const WEB3 = require("web3");
const config = require("../contracts/WatchTower.json");

async function Stats(req, res) {
  try {
    var fResponse = {
      currentSupply: 0,
      totalAttLocked:0,
      rewardPoolSize: 0,
      currentRate:"",
      apy:"",
      rewardReset:""
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
    fResponse.currentRate =  parseFloat(info.price / 1e18).toFixed(2);
    fResponse.apy = 100;
    fResponse.rewardReset= 56097890;


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
      userAttbalance: 0
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
      userxAttStake: 0
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
