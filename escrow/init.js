contract = new require('../contract')('ZcashEscrow')

func = (instance) => {
  instance.initialize(contract.web3.toWei(1, "ether"), [contract.web3.eth.coinbase],
          new Date(Date.now() + 1200).getTime() / 1000,
    {from: contract.web3.eth.coinbase, gas: 250000},
    function(err, data, something) {
        console.log("err: " + err);
        console.log("data: " + data);
        console.log("something: " + something);
    });
}
contract.runFunc(func)
