const network = require("../config/chainConf");
const WEB3 = require("web3");
const zeldaConfig = require("../contracts/Zelda.json");


//currentZeldaCount
async function Stats(req, res) {
  try {
    var fResponse = {
      totalRewardPerDay:1000,
      totalWinningPositions:5,
      distributionCounter:0,
      lotteryCriteria:"trade daily"
    };
    res.json({ response: fResponse });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

//winHistory
async function History(req, res) {
  try {
    var fResponse = {
      winnerAddress: "",
      position: 0,
      hasPendingClaim: false,
      claimAmunt: 0,
    };
    res.json({ response: fResponse });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

//currentWin
async function Winner(req, res) {
  try {
    var fResponse = {
      winnerAddress: "",
      position: 0,
      hasPendingClaim: false,
      claimAmunt: 0,
    };
    const web3 = new WEB3(network.rpc);
    let zeldaInstance = new web3.eth.Contract(
      zeldaConfig.abi,
      zeldaConfig.address
    );
    res.json({ response: fResponse });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

//userClaim
async function UserClaim(req, res) {
  try {
    const user = req.params.userAddress;
    var fResponse = {
      hasPendingClaim: false,
      claimAmount: 0,
    };
    const web3 = new WEB3(network.rpc);
    let zeldaInstance = new web3.eth.Contract(
      zeldaConfig.abi,
      zeldaConfig.address
    );

    res.json({ response: fResponse });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

module.exports = {
  Stats,
  History,
  Winner,
  UserClaim,
};
