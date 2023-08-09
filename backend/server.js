const express = require("express");
const Cors = require("cors");
const web3 = require("web3");
const axios = require("axios");
const ethers = require("ethers");

//app config
const app = express();
const port = process.env.PORT || 8001;

//middleware
app.use(express.json());
app.use(Cors());
app.use(express.urlencoded({ extended: true }));

app.set("view-engine", "js");

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/signedInUserBalance", async (req, res) => {
  const reqData = req.query;
  console.log(reqData);
  const signerAdd = await ethers.utils.verifyMessage(
    reqData.accountN,
    reqData.sign
  );
  console.log("signerAdd", signerAdd);
  console.log("acc", reqData.accountN);
  if (signerAdd.toLowerCase() !== reqData.accountN) {
    res.send({ error: "signature invalid" });
    return;
  }
  const data = await axios.get(
    `https://api-testnet.polygonscan.com/api?module=account&action=balance&address=${reqData.accountN}&apikey=MW61QGE2NG5E3CUTH1VD2V3F5RIMJII5GW`
  );
  console.log(data.data.result);
  res.send(data.data.result);
});

app.listen(port, () => console.log(`listening on localhost: ${port}`));
