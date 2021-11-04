import React, { Component } from 'react'

class Faucet extends Component {

  render() {
    return ( 
      <div>
        <h1>FAUCET</h1>
        <h6>FAUCET ADDRESS: &nbsp;<b>{this.props.faucet._address}</b></h6>
        <h6 class="bottom-bar">PCM ADDRESS: &nbsp;<b>{this.props.tuviella._address}</b></h6>      
        <table>
          <thead>
            <tr>
              <th scope="col">WALLET BALANCE</th>
              <th scope="col">FAUCET BALANCE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>{Math.round(window.web3.utils.fromWei(this.props.tuviellaTokenBalance.toString(), 'Ether')*100)/100 + " PCM"}</b>
              </td>
              <td>
                <b>{Math.round(window.web3.utils.fromWei(this.props.faucetTuviellaTokenBalance.toString(), 'Ether')*100)/100 + " PCM"}</b>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="btn2">
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
      </div>
    );
  }
}

export default Faucet;