import Chain from "./Chain"
import {
    bsctestPCMTokenAddress,
    bsctestFaucetAddress,
    bsctestStakingAddress
     
} from './Contracts'

let chains = []

//Chain: Name, id, Token, rcp, scanner, TuviellaTokenAddress, FaucetAddress, StakingAddress

chains.push(
    new Chain(
        "BSC-Testnet",
        97,
        "BNB",
        "https://data-seed-prebsc-1-s1.binance.org:8545/",
        "https://testnet.bscscan.com",
        bsctestPCMTokenAddress,
        bsctestFaucetAddress,
        bsctestStakingAddress
    )
)

export default chains;

