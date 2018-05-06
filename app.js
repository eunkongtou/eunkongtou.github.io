/* 现连接到geth节点，并获取已部署合约的引用 */
var express = require("express");  
var app = express();  
var server = require("http").createServer(app);
var io = require("socket.io")(server);
var BigNumber = require('bignumber.js');

app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

// 现连接到geth节点
var Web3 = require("web3");
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));  


/* 部署合约 */
var abi = [{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[{"name":"sufficient","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}];

var eunaddress = "0x77e9aee075a8fe68473c305ad6f7d950fb730811";   //合约生成成功后的地址

var euncoin = web3.eth.contract(abi).at(eunaddress);

var event = euncoin.SearchFund(function(error, result){
    console.log("Event are as following:-------");
    
    for(let key in result){
     console.log(key + " : " + result[key]);
    }
    var payer = result.address;
    var funderevent = euncoin.FundTransfer({backer:payer});
    euncoin.autotransfer.sendTransaction({from:address_a};
    console.log("Event ending-------");
});
// app.get("/register", function(req, res){

//     //获取输入的密码
//     var password = req.query.password;
//     //创建账户
//     var account = web3.personal.newAccount(password);
//     res.send(account);

// })

// app.get("/getBalance", function(req, res){

//     var address = req.query.address;

//     //获取address的余额
//     var returnValue = euncoin.getBalance.call(address).toString();
//     res.send(returnValue);

// })

// app.get("/sendcoin", function(req, res){

//     var address_a = req.query.address_a;
//     var address_b = req.query.address_b;
//     var trans_value = req.query.trans_value;

//     //转账操作
//     var txhash = euncoin.transfer.sendTransaction(address_b, trans_value, {from:address_a});
//     res.send(txhash);

// })
server.listen(8080);