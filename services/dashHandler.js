const network = require("../config/chainConf");
const WEB3 = require("web3");
const config = require("../contracts/WatchTower.json");


async function primaryStats(req, res) {
  try {
    //marketcap calculate 
    var fResponse = {
      tvl: 0,
      oracleRate: 0,
      marketCap: 0,
      targetPrice: 1,
      circulatingSupply:0,
      nextBuyBack:"",
    };
    const web3 = new WEB3(network.rpc);
    let instance = new web3.eth.Contract(
      config.abi,
      config.address
    );

    let info = await instance.methods.primaryStatsDash().call();
    console.log("info",info);
//uint256 totalAttLocked, uint256 totalBusdLocked, uint256 totalBnbAttLpLocked , uint256 oracleRate,uint256 targetPrice, uint256 circulatingSupply
    fResponse.tvl = info.totalStaked;
    fResponse.oracleRate = info.totalRewardLeft;
    fResponse.marketCap = info.resetblock;
    fResponse.targetPrice = 100;
    fResponse.circulatingSupply = info.resetblock;
    fResponse.nextBuyBack = 100;


    console.log("fResponse",fResponse);

    // fResponse.circulatingSupply = parseFloat(
    //   web3.utils.fromWei(cSupply, "gwei")
    // ).toFixed(2);

    //fResponse.oracleRate = parseFloat(cRate / 1e18).toFixed(2);

    // fResponse.marketCap =
    //   parseFloat(fResponse.circulatingSupply) *
    //   parseFloat(fResponse.oracleRate);
    console.log("fResponse", fResponse);
    res.json({ response: fResponse });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

async function Stats(req, res) {
  try {
    var fResponse = {
      lastRebase: "",
      nextRebaseCheck: "",
    };

    const web3 = new WEB3(network.rpc);
    let instance = new web3.eth.Contract(
      config.abi,
      config.address
    );

    let info = await instance.methods.statsDash().call();
    console.log("info",info);

    fResponse.lastRebase = info.lastRebase;
    fResponse.nextRebaseCheck = info.nextRebase;

    console.log("fResponse",fResponse);
    res.json({ response: fResponse });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

module.exports = {
  primaryStats,
  Stats,
};
