import web3
import os
import json

executable = "./../zokrates-0.7.13-aarch64-apple-darwin/zokrates"

def toStruct(proof):
    sp = proof['proof']
    sp2 = {}
    for k in ['a', 'c']:
        sp2[k] = {'X':int(sp[k][0], 16), 'Y':int(sp[k][1], 16)}
    sp2['b'] = {'X':[int(sp['b'][0][0], 16), int(sp['b'][0][1], 16)], 'Y':[int(sp['b'][1][0], 16), int(sp['b'][1][1], 16)]}

    si = [int(proof['inputs'][0], 16), int(proof['inputs'][1], 16)]
    return sp2, si

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

# getting proofs
print("getting proofs...")
addr = account.address
os.system(f"{executable} compute-witness -a "+ str(int(addr, 16)))
os.system(f"{executable} generate-proof")
with open('proof.json', 'r') as f:
    proof, inp = toStruct(json.load(f))

# sending transactions
print("sending transactions...")

tx_hash = verifier.functions.verifyTx(proof, inp).transact()

print(tx_hash)