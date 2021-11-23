import Chain from "./Chain"
import {
    bscPatoTokenAddress,
    bscStakingAddress,
    bscFaucetAddress
} from './Contracts'

let chains = []

chains.push(
    new Chain(
        "BSC-Mainnet",
        56,
        "BNB",
        "https://bsc-dataseed.binance.org/",
        "https://bscscan.com",
        bscPatoTokenAddress,
        bscStakingAddress,
        bscFaucetAddress
    )
)

export default chains;

