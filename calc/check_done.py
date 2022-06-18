import web3
import os
import json

# gettting provider
print("connecting...")
with open("infura.secret", "r") as f:
    infura_secret = f.read().rstrip()
    w3 = web3.Web3(web3.HTTPProvider(f"https://ropsten.infura.io/v3/{infura_secret}"))

# getting account
print("getting sk...")
with open('privateKey.secret', 'r') as f:
    privateKey = f.read().rstrip()
    account = w3.eth.account.privateKeyToAccount(privateKey)

# getting abi and contract
print("getting verifier...")
with open("verifier.abi") as f:
    abi = json.load(f)
contract_address = '0xe03e186D9772C68329C26d9CD659036adFFDC6c0'
verifier = w3.eth.contract(address=contract_address, abi=abi)

# sending calls (check is done)
print("sending calls...")

# https://web3py.readthedocs.io/en/stable/examples.html#using-infura-rinkeby-node
# https://web3py.readthedocs.io/en/stable/web3.eth.account.html?highlight=transaction#sign-a-contract-transaction

done = verifier.functions.isDone().call({'from': account.address})

print(done)