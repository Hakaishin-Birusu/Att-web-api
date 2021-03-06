const network = require("../config/chainConf");
const WEB3 = require("web3");
const config = require("../contracts/WatchTower.json");

async function Stats(req, res) {
  try {
    var fResponse = {
      totalRewardPerDay: 1000,
      totalWinningPositions: 5,
      distributionCounter: 0,
    };

    const web3 = new WEB3(network.rpc);
    let instance = new web3.eth.Contract(
      config.abi,
      config.address
    );

    fResponse.distributionCounter = await instance.methods.currentZeldaCount().call();
    console.log("fResponse", fResponse);

    res.json({ response: fResponse });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

async function History(req, res) {
  try {
    var pnum = req.params.pnum;
    console.log("pnum", pnum)
    let winnerInfo;
    var fResponse = [];

    const web3 = new WEB3(network.rpc);
    let instance = new web3.eth.Contract(
      config.abi,
      config.address
    );

    if(pnum == undefined || pnum == 10101010101){
    winnerInfo = await instance.methods.currentWin().call();
    pnum = await instance.methods.currentZeldaCount().call();
    console.log("winnerInfo1");
    }else{
    winnerInfo = await instance.methods.winHistory(pnum).call();
    console.log("winnerInfo2");
    }
    for (i = 0; i < winnerInfo.length; i++) {
      fResponse.push({
        winnerAddress: winnerInfo[i].winnerAddress,
        claimAmount: web3.utils.fromWei(winnerInfo[i].claimAmount, "gwei"),
        position: winnerInfo[i].position,
        hasPendingClaim: winnerInfo[i].hasPendingClaim,
        pNum:pnum
      });
    }

    console.log("fResponse", fResponse);
    res.json({ response: fResponse });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

async function UserClaim(req, res) {
  try {
    const user = req.params.useraddress;
    console.log("user", user);
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
    console.log("claimInfo", claimInfo);

    fResponse.claimAmount = web3.utils.fromWei(claimInfo.amount, "gwei");

    fResponse.hasPendingClaim = claimInfo.hasClaim;

    console.log("fResponse", fResponse);
    res.json({ response: fResponse });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

module.exports = {
  Stats,
  History,
  UserClaim,
};
