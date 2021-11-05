class Chain {

  name = "-"
  id = "-"
  symbol = "-"
  rpcUrl = "-"
  blockExplorerUrl = "-"
  tuviellaTokenAddress = "-"
  stakingAddress = "-"
  faucetAddress = "-"

  constructor(name, id, symbol, rpcUrl, blockExplorerUrl, tuviellaTokenAddress, faucetAddress, stakingAddress){
    this.name = name
    this.id = id
    this.symbol = symbol
    this.rpcUrl = rpcUrl
    this.blockExplorerUrl = blockExplorerUrl
    this.tuviellaTokenAddress = tuviellaTokenAddress
    this.faucetAddress = faucetAddress
    this.stakingAddress = stakingAddress
  } 
  
}

export default Chain;
