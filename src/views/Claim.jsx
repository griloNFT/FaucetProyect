import React, { Component } from 'react'
import Portada from '../images/patologo.png'

class Faucet extends Component {

  render() {
    return (
      <div>
        <h1 class="titles">CLAIM FREE PVP EVERY 24 HOURS</h1>
        <p><img src={Portada} class="logo" /></p>
        <article>
          <div class="boxModal">    
            <table>
              <thead>
                <tr>
                  <th scope="col">AVAILABE PVP</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> 
                    {Math.round(window.web3.utils.fromWei(this.props.faucetPatoTokenBalance.toString(), 'Ether')*100)/100}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>
                    <div class="btn2">
                      <button
                        disabled={this.props.patoExpiry > 0 }
                        className="slide_from_left"
                        onClick={(event) => {
                          event.preventDefault()
                          this.props.claimToken()
                        }}>
                        {this.props.patoExpiry > 0 ? "CLAIM AGAIN IN " + this.props.patoExpiry + " SECS" : "CLAIM FREE"}
                      </button>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table> 
            <h4>WALLET BALANCE: &nbsp;<span>{Math.round(window.web3.utils.fromWei(this.props.patoTokenBalance.toString(), 'Ether')*100)/100 + " " + this.props.tokenName.toString()}</span></h4>
            <div class="footerModal">
              <a href="https://testnet.bscscan.com/address/0xE99E1B538c718C2F637845F303e0146Df4c85CE3" target="_blank" rel="noopener noreferrer">FAUCET CONTRACT</a>
              <a href="https://testnet.bscscan.com/address/0x613Aa50c5245C7b3fEFe28f26009216Df754767d" target="_blank" rel="noopener noreferrer">PVP CONTRACT</a>
            </div>
          </div>
        </article>
      </div>  
    );
  }
}

export default Faucet;