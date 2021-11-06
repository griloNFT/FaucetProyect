import React, { Component } from 'react'
import patoIcon from '../images/patologo.png'

class Faucet extends Component {

  render() {
    return ( 
      <div>
        <h1>FAUCET</h1>
        <img src={patoIcon} width="70" height="70" className="d-inline-block align-top" alt="" />      
        <table>
          <thead>
            <tr>
              <th scope="col">FAUCET BALANCE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {Math.round(window.web3.utils.fromWei(this.props.faucetPatoTokenBalance.toString(), 'Ether')*100)/100 + " " + this.props.tokenName.toString()}
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
          <h6>WALLET BALANCE &nbsp;<span>{Math.round(window.web3.utils.fromWei(this.props.patoTokenBalance.toString(), 'Ether')*100)/100 + " " + this.props.tokenName.toString()}</span></h6>
          <a href="https://testnet.bscscan.com/address/0xE99E1B538c718C2F637845F303e0146Df4c85CE3" target="_blank" rel="noopener noreferrer">FAUCET CONTRACT</a>
          <a href="https://testnet.bscscan.com/address/0x613Aa50c5245C7b3fEFe28f26009216Df754767d" target="_blank" rel="noopener noreferrer">PVP CONTRACT</a>
        </div>
      </div>
    );
  }
}

export default Faucet;