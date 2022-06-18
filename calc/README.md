# ZKP Calculator


## Processure
- the code basically is a stack calculator
- a `OP_CALC` will update top-1 with OP and top
- a `OP_PUSH` will invoke a read of data and push the next OP into the stack

## Problems
- use `web.py` to send transactions to ropsten with infura
  - https://web3py.readthedocs.io/en/stable/examples.html#using-infura-rinkeby-node
  - https://web3py.readthedocs.io/en/stable/web3.eth.account.html?highlight=transaction#sign-a-contract-transaction

## Results
- https://ropsten.etherscan.io/tx/0x1961e57640586f083bcb9765135155978f000415763c8a965d9e88b31f9a9b1a