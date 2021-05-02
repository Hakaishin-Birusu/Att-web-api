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
      circulatingSupply: 0,
      nextBuyBack: "15/05/2021",
    };
    const web3 = new WEB3(network.rpc);
    let instance = new web3.eth.Contract(
      config.abi,
      config.address
    );

    let info = await instance.methods.primaryStatsDash().call();
    console.log("info", info);
    fResponse.oracleRate = parseFloat(info.oracleRate / 1e18).toFixed(5);
    fResponse.circulatingSupply = parseFloat(
      web3.utils.fromWei(info.circulatingSupply, "gwei")
    ).toFixed(2);
    fResponse.marketCap =
      (parseFloat(fResponse.circulatingSupply) *
        parseFloat(fResponse.oracleRate)).toFixed(2);

    
//uint256 totalAttLocked, uint256 totalBusdLocked, uint256 totalBnbAttLpLocked , uint256 oracleRate,uint256 targetPrice, uint256 circulatingSupply
fResponse.tvl = 100000000;

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
    console.log("info", info);

    fResponse.lastRebase = info.lastRebase;
    fResponse.nextRebaseCheck = info.nextRebase;

    console.log("fResponse", fResponse);
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
