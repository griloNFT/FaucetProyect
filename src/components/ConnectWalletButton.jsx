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
    <div>
      {active ? <button class="btn first" onClick={disconnect}>DISCONNECT</button> : <button class="btn first" onClick={connect}>CONNECT WALLET</button>}
    </div>
  )
}
