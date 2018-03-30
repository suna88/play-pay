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
            el: '#app',
//    });
            // noinspection JSAnnotator
            //  Vue.component('trade-comp', {
            /*            template:
            '<div class="easy-trade">'+
                    '<div class="box middle-blue">'+
                '<div class="upper">' +
            '<div class="mask"></div>' +
            '<h2 class="box-title">PlayCoinの売り価格</h2>\n' +
            '      <div class="price blue">' +
            '<span>売却</span><br>\n' +
            '        {{sell_price}}円<br>\n' +
            //'        前日比 +1234円\n' +
            '      </div>\n' +
            '      <h2 class="box-title">PlayCoinの数量</h2>\n' +
            '      <input v-model="sellAmount" type="number" min="0" step="1"> PCi\n' +
            '      <h2 class="box-title">日本円の設定金額</h2>\n' +
            '      <div>{{total_buy_price = sell_price * sellAmount}} 円</div>\n' +
            '      <div v-if="showBalance(balance) * 1 <sellAmount">PlayCoin不足です</div>\n' +
            '      <button class="button blue">PlayCoinを売る</button>\n' +
            '    </div>' +
            '<div class="light-blue">\n' +
            '      <h2>所持<span> {{ showBalance(balance) }}</span> PC</h2>\n' +
            '    </div>\n' +
            '  </div>' +
            '<div class="box middle-red">\n' +
            '    <div class="upper">\n' +
            '      <h2 class="box-title">PlayCoinの買う価格</h2>\n' +
            '      <div class="price red">\n' +
            '        <span>購入</span><br>\n' +
            '        {{buy_price}} 円<br>\n' +
            //'        前日比 +424円\n' +
            '      </div>\n' +
            '      <h2 class="box-title">PlayCoinの数量</h2>\n' +
            '      <input v-model="buyAmount" type="number" min="0" step="1"> PC\n' +
            '      <h2 class="box-title">日本円の設定金額</h2>\n' +
            '      <div>{{total_buy_price = buy_price * buyAmount}} 円</div>\n' +
            '      <div v-if="total_buy_price > balance_yen">所持金不足です。入金してください</div>\n' +
            '      <button @click="get" class="button red">PlayCoinを買う</button>' +
            '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">\n' +
            '<input type="hidden" name="cmd" value="_xclick">\n' +
            '<input type="hidden" name="business" value="makku88byyuki@yahoo.co.jp">\n' +
            '<input type="hidden" name="lc" value="JP">\n' +
            '<input type="hidden" name="item_name" value="PlayCoin">\n' +
            '<input type="hidden" name="amount" value="buyAmount">\n' +
            '<input type="hidden" name="currency_code" value="USD">\n' +
            '<input type="hidden" name="button_subtype" value="services">\n' +
            '<input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHosted">\n' +
            '<input type="image" src="https://www.paypalobjects.com/ja_JP/JP/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - オンラインでより安全・簡単にお支払い">\n' +
            '<img alt="" border="0" src="https://www.paypalobjects.com/ja_JP/i/scr/pixel.gif" width="1" height="1">\n' +
            '</form>\n' +

            '</div>\n' +
            '    <div class="light-red">\n' +
            '      <h2>所持 <span>{{balance_yen}}</span> 円</h2>\n' +
            '    </div>\n' +
            '  </div>\n' +
            '</div>',*/

            data: function () {
                return {

                    defaultAccount: defaultAccount, // 選択されているEhtereumアカウント
                    name: name,                     // トークンの名前
                    symbol: symbol,                 // トークンのシンボル
                    balance: balance,               // トークンをいくら所持しているか
                    amount: 0,                      // 送金する量
                    history: "",                     // 送金トランザクションのハッシュ
                    page: 0,
                    sellAmount: 0,
                    buyAmount: 0,
                    to: '',
                    sell_price: 82000,
                    buy_price: 85300,
                    total_buy_price: 0,
                    total_sell_price: 0,
                    balance_yen: 32000000
                }
            },
            methods: {
                // 残高の表示を整形するメソッド
                showBalance: function (balance) {
                    return (balance / 1e18).toFixed(2);
                },
                get: function () {
                    var $this = this;
                    var amount = this.buyAmount * 1e18;
                    console.log(amount);
                    contract.transferFrom(masterAccount, defaultAccount, amount, function (err, txhash) {
                        if (err) throw err;
                        $this.history = txhash;
                        contract.balanceOf(defaultAccount, function (err, balance) {
                            $this.balance = balance;
                        });

                    })
                },

                make: function () {
                    var ac = web3.personal.newAccount('test');
                    console.log(ac)
                }


            }
        }
    )
}