// ここにコードを書いていきます
window.addEventListener('load', function () {
    if (typeof web3 !== 'undefined') {
        window.web3 = new Web3(web3.currentProvider);
        onlyRopstenTestNetwork(main);
    } else {
        //document.write("Please install" +  `<a href="\"https://metamask.io/">MetaMask</a>`)
    }
});

function onlyRopstenTestNetwork(cb) {
    web3.version.getNetwork(function (err, netId) {
        if (netId === "3") {
            cb();
        } else {
            document.write("Please switch MetaMask to Ropsten Test Network and reload page.");
        }
    });
}

var contractAddress = "0x6c123c0029a6dd4d0c4a53f556611c665d886011";
var masterAccount = "0xBEDdD2686455DD6cB99a34A055679B92030928d8";
var abiArray = [{
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [{"name": "", "type": "string"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"


}, {
    "constant": false,
    "inputs": [{"name": "_spender", "type": "address"}, {"name": "_value", "type": "uint256"}],
    "name": "approve",
    "outputs": [{"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_from", "type": "address"}, {"name": "_to", "type": "address"}, {
        "name": "_value",
        "type": "uint256"
    }],
    "name": "transferFrom",
    "outputs": [{"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_spender", "type": "address"}, {"name": "_subtractedValue", "type": "uint256"}],
    "name": "decreaseApproval",
    "outputs": [{"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "_owner", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"name": "balance", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [{"name": "", "type": "string"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_to", "type": "address"}, {"name": "_value", "type": "uint256"}],
    "name": "transfer",
    "outputs": [{"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_spender", "type": "address"}, {"name": "_addedValue", "type": "uint256"}],
    "name": "increaseApproval",
    "outputs": [{"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "_owner", "type": "address"}, {"name": "_spender", "type": "address"}],
    "name": "allowance",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "owner", "type": "address"}, {
        "indexed": true,
        "name": "spender",
        "type": "address"
    }, {"indexed": false, "name": "value", "type": "uint256"}],
    "name": "Approval",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "from", "type": "address"}, {
        "indexed": true,
        "name": "to",
        "type": "address"
    }, {"indexed": false, "name": "value", "type": "uint256"}],
    "name": "Transfer",
    "type": "event"
}, {
    "constant": false,
    "inputs": [{"name": "initialSupply", "type": "uint256"}],
    "name": "MyToken",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}];

function main() {
    var defaultAccount = web3.eth.defaultAccount;
    var contract = web3.eth.contract(abiArray).at(contractAddress);
    contract.name(function (err, name) {
        if (err) throw err;
        contract.symbol(function (err, symbol) {
            if (err) throw err;
            contract.balanceOf(defaultAccount, function (err, balance) {
                if (err) throw err;
                initializeApp(defaultAccount, contract, name, symbol, balance);
            });
        });
    });
}

function initializeApp(defaultAccount, contract, name, symbol, balance) {
    new Vue({
            el: '#js-app',
            data: function () {
                return {

                    defaultAccount: defaultAccount, // 選択されているEhtereumアカウント
                    name: name,                     // トークンの名前
                    symbol: symbol,                 // トークンのシンボル
                    balance: balance,               // トークンをいくら所持しているか
                    amount: 0,                      // 送金する量
                    page: 0,
                    to: '',
                }
            },
            methods: {
                // 残高の表示を整形するメソッド
                showBalance: function (balance) {
                    return (balance / 1e18).toFixed(2);
                },
                send: function (to_address,amount) {
                    //var $this = this;
                    amount = amount * 1e18;
                    contract.transfer(to_address, amount, {from: defaultAccount}, function (err, txhash) {
                        if (err) throw err;
                        //$this.history = txhash;
                        //contract.balanceOf(defaultAccount, function (err, balance) {
                        //    $this.balance = balance;
                        //}
                       // );
                    });
                },
                test:function (x,y) {
                    console.log(x,y)
                }
            }
        }
    )
}