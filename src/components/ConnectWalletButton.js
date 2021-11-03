import React from 'react'
import { useWeb3React } from "@web3-react/core"
import { injected } from "./Connectors"

export default function ConnectWalletButton() {
  const { active, account, library, connector, activate, deactivate } = useWeb3React()

  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
        console.log(ex)
      }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
        console.log(ex)
      }  
  }

  return (
    <div id="connectModal">
      {active ? <span id="activateWallet">BSC - TESTNET | <b>{account}</b></span>: <span><b>BSC - TESTNET</b></span>} 
      {active ? <button class="btn first" onClick={disconnect}>Hide Wallet</button> : <button class="btn first" onClick={connect}>Show Wallet</button>} 
    </div>
  )
}
