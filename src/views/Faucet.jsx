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
                <b>{Math.round(window.web3.utils.fromWei(this.props.faucetTuviellaTokenBalance.toString(), 'Ether')*100)/100 + " PCM"}</b>
              </td>
            </tr>
          </tbody>
        </table>
        <div id="buttonModal" class="btn2">
          <button
            type="submit"
            disabled={this.props.tuviellaExpiry > 0 }
            className="slide_from_left"
            onClick={(event) => {
              event.preventDefault()
              this.props.claimTuViella()
            }}>
          {this.props.tuviellaExpiry > 0 ? "WAIT " + this.props.tuviellaExpiry + " SECS" : "CLAIM PCM"}
          </button>
        </div>
        <div class="footerModal">     
          <p>WALLET BALANCE &nbsp;<b>{Math.round(window.web3.utils.fromWei(this.props.tuviellaTokenBalance.toString(), 'Ether')*100)/100 + " PCM"}</b></p>
          <a href="https://testnet.bscscan.com/address/0x2ed14F3261eE8A1F1f38Ac40DD52f2E586Bb47F3" target="_blank" rel="noopener noreferrer">FAUCET ADDRESS</a>
          <a href="https://testnet.bscscan.com/address/0x62C733e3FaB7087f1077C542765DdD7ce3BC2A17" target="_blank" rel="noopener noreferrer">PCM ADDRESS</a>
        </div>
      </div>
    );
  }
}

export default Faucet;