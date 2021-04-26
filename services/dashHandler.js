const network = require("../config/chainConf");
const WEB3 = require("web3");
const attConfig = require("../contracts/AttToken.json");
const oracleConfig = require("../contracts/MarketOracle.json");

async function primaryStats(req, res) {
  try {
    var fResponse = {
      circulatingSupply: 0,
      oracleRate: 0,
      marketCap: 0,
      targetPrice: 1,
    };

    const web3 = new WEB3(network.rpc);
    let attInstance = new web3.eth.Contract(
      attConfig.attAbi,
      attConfig.attAddress
    );
    let oracleInstance = new web3.eth.Contract(
      oracleConfig.oracleAbi,
      oracleConfig.oracleAddress
    );

    let cSupply = await attInstance.methods.totalSupply().call();
    let cRate = await oracleInstance.methods.getData().call();

    fResponse.circulatingSupply = parseFloat(
      web3.utils.fromWei(cSupply, "gwei")
    ).toFixed(2);

    fResponse.oracleRate = parseFloat(cRate / 1e18).toFixed(2);

    fResponse.marketCap =
      parseFloat(fResponse.circulatingSupply) *
      parseFloat(fResponse.oracleRate);

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
      nextRebase: "",
      tvl: 0,
      nextBuyBackDate: "",
    };
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
