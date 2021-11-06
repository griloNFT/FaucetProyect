import Chain from "./Chain"
import {
    bscTestPatoTokenAddress,
    bscTestStakingAddress,
    bscTestFaucetAddress 
} from './Contracts'

let chains = []

chains.push(
    new Chain(
        "BSC-Testnet",
        97,
        "BNB",
        "https://data-seed-prebsc-1-s1.binance.org:8545/",
        "https://testnet.bscscan.com",
        bscTestPatoTokenAddress,
        bscTestStakingAddress,
        bscTestFaucetAddress
    )
)

export default chains;

