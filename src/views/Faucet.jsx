import React, { Component } from 'react'

class Faucet extends Component {

  render() {
    return ( 
      <div>
        <h1>FAUCET</h1>      
        <table>
          <thead>
            <tr>
              <th scope="col">FAUCET BALANCE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>{Math.round(window.web3.utils.fromWei(this.props.faucetPatoTokenBalance.toString(), 'Ether')*100)/100 + " PVP"}</b>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="btn2">
          <button
            type="submit"
            disabled={this.props.patoExpiry > 0 }
            className="slide_from_left"
            onClick={(event) => {
              event.preventDefault()
              this.props.claimTuViella()
            }}>
          {this.props.patoExpiry > 0 ? "CLAIM AGAIN IN " + this.props.patoExpiry + " SECS" : "CLAIM 1 PVP TOKEN"}
          </button>
        </div>
        <div class="footerModal">     
          <p>WALLET BALANCE &nbsp;<b>{Math.round(window.web3.utils.fromWei(this.props.patoTokenBalance.toString(), 'Ether')*100)/100 + " PVP"}</b></p>
          <a href="https://testnet.bscscan.com/address/0xE99E1B538c718C2F637845F303e0146Df4c85CE3" target="_blank" rel="noopener noreferrer">FAUCET CONTRACT</a>
          <a href="https://testnet.bscscan.com/address/0x613Aa50c5245C7b3fEFe28f26009216Df754767d" target="_blank" rel="noopener noreferrer">PVP CONTRACT</a>
        </div>
      </div>
    );
  }
}

export default Faucet;