"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const ethers_2 = require("ethers");
const abi = __importStar(require("./verifier_abi.json"));
const fs_1 = require("fs");
async function main() {
    const provider = new ethers_2.ethers.providers.JsonRpcProvider("https://ropsten.infura.io/v3/");
    const sk = (0, fs_1.readFileSync)("privateKey.secret");
    const contract_address = "0xe03e186D9772C68329C26d9CD659036adFFDC6c0";
    const signer = new ethers_2.ethers.Wallet(sk, provider);
    const verifier = new ethers_1.Contract(contract_address, abi, signer);
    let done = await verifier.connect(provider).isDone();
    console.log(done);
}
main();
