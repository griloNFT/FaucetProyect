import Chain from "./Chain"
import {
    bscPatoTokenAddress,
    bscStakingAddress,
    bscFaucetAddress
} from './Contracts'

let chains = []

chains.push(
    new Chain(
        "BSC-Testnet",
        97,
        "BNB",
        "https://data-seed-prebsc-1-s1.binance.org:8545/",
        "https://testnet.bscscan.com",
        bscPatoTokenAddress,
        bscStakingAddress,
        bscFaucetAddress
    )
)

export default chains;

