# ZKP Calculator

## Versions
- python 3.10.2
- zokrates 0.7.13
- web3.py 5.29.2

## Resources
- zokrate docs

## Solving Processure
- the code basically is a stack calculator
- a `OP_CALC` will update top-1 with OP and top
- a `OP_PUSH` will invoke a read of data and push the next OP into the stack

## Usage 
- get proof and upload to chain 
  - `python sendtx.py`
- get confirmation of `isDone`
  - `python check_done.py`
  - `ts-node check_done.ts`

## Problems
- use `web.py` to send transactions to ropsten with infura
  - this is the first time I send a tx on chain via web3.py, the experience is terrible and took me 2 hours (for uploading tx and trying to figure out the logics from the poor written docs)
  - https://web3py.readthedocs.io/en/stable/examples.html#using-infura-rinkeby-node
  - https://web3py.readthedocs.io/en/stable/web3.eth.account.html?highlight=transaction#sign-a-contract-transaction

## Results
- https://ropsten.etherscan.io/tx/0x1961e57640586f083bcb9765135155978f000415763c8a965d9e88b31f9a9b1a