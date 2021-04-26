const network = require("../config/chainConf");
const WEB3 = require("web3");

async function Stats(req, res) {
  try {
    var fResponse = {
      userxAttStake: 0,
      userStakePosition: 0,
    };
    res.json({ response: fResponse });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

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

async function Winner(req, res) {
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

async function UserClaim(req, res) {
  try {
    var fResponse = {
      hasPendingClaim: false,
      claimAmunt: 0,
    };
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
