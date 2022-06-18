import { Contract, ContractFactory, Signer } from "ethers"
import { ethers } from "ethers"
import * as abi from "./verifier_abi.json"
import { readFileSync } from "fs"

async function main() {
  const sk = readFileSync("privateKey.secret", "utf8")
  const infura_node = readFileSync("infura.secret", "utf8")

  console.log(
    "connecting to https://ropsten.infura.io/v3/" + infura_node + "......"
  )

  const provider = new ethers.providers.JsonRpcProvider(
    "https://ropsten.infura.io/v3/" + infura_node
  )
  const contract_address = "0xe03e186D9772C68329C26d9CD659036adFFDC6c0"
  const signer = new ethers.Wallet(sk!, provider)
  const verifier = new Contract(contract_address, abi, signer)
  let done = await verifier.isDone()
  // let students = await verifier.retrieveStudents(), TA only!

  console.log(await signer.getAddress())
  console.log(done)
  // console.log(students)
}

main()
