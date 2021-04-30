const network = require("../config/chainConf");
const WEB3 = require("web3");
const config = require("../contracts/WatchTower.json");

//currentZeldaCount
async function Stats(req, res) {
  try {
    var fResponse = {
      totalRewardPerDay:1000,
      totalWinningPositions:5,
      distributionCounter:0,
      lotteryCriteria:"trade daily"
    };

    const web3 = new WEB3(network.rpc);
    let instance = new web3.eth.Contract(
      config.abi,
      config.address
    );

    fResponse.distributionCounter = await instance.methods.currentZeldaCount().call();
    
    console.log("fResponse",fResponse);
    res.json({ response: fResponse });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

//winHistory
async function History(req, res) {
  try {
    const pnum = req.params.pnum;
    var fResponse = [];

    const web3 = new WEB3(network.rpc);
    let instance = new web3.eth.Contract(
      config.abi,
      config.address
    );

    let winnerInfo = await instance.methods.winHistory(pnum).call();
    console.log("winnerInfo",winnerInfo);

    for (i = 0; i < winnerInfo.length; i++) {
      finalResponse.push({
        winnerAddress: proposalData[i].winnerAddress,
        claimAmount: proposalData[i].claimAmount,
        position: proposalData[i].position,
        hasPendingClaim: proposalData[i].hasPendingClaim,
      });
    }    

    console.log("fResponse", fResponse);
    res.json({ response: fResponse });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

//currentWin
async function Winner(req, res) {
  try {
    var fResponse = [];

    const web3 = new WEB3(network.rpc);
    let instance = new web3.eth.Contract(
      config.abi,
      config.address
    );

    let winnerInfo = await instance.methods.currentWin().call();
    console.log("winnerInfo",winnerInfo);

    for (i = 0; i < winnerInfo.length; i++) {
      finalResponse.push({
        winnerAddress: proposalData[i].winnerAddress,
        claimAmount: proposalData[i].claimAmount,
        position: proposalData[i].position,
        hasPendingClaim: proposalData[i].hasPendingClaim,
      });
    }    
    console.log("fResponse", fResponse);
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
    let instance = new web3.eth.Contract(
      config.abi,
      config.address
    );

    let claimInfo = await instance.methods.userClaim(user).call();
    console.log("claimInfo",claimInfo);

    fResponse.claimAmount = parseFloat(
      web3.utils.fromWei(claimInfo.amount, "gwei")
    ).toFixed(2);
    fResponse.hasPendingClaim = claimInfo.hasClaim;

    console.log("fResponse",fResponse);
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
