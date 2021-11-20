import React, { Component } from 'react'

class Faucet extends Component {

  render() {
    return (
      <div>
        <h1 class="titles">Active Claims (1)</h1>
        <article>
          <div class="boxModal">
            <h3>PVP</h3>    
            <table>
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
                        {this.props.patoExpiry > 0 ? Math.round(this.props.patoExpiry / 3600) + " H " + Math.round(this.props.patoExpiry / 60) + " M": "CLAIM 1 PVP"}
                      </button>
                      {}
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table> 
            <h4>Wallet Balance: &nbsp;<span>{Math.round(window.web3.utils.fromWei(this.props.patoTokenBalance.toString(), 'Ether')*100)/100 + " " + this.props.tokenSymbol.toString()}</span></h4>
            <div class="footerModal">
              <h3>Info</h3>
              <p>
                In this section you can claim 1 free PVP token every 24 hours for each wallet.
              </p>
              <a href="https://testnet.bscscan.com/address/0xE99E1B538c718C2F637845F303e0146Df4c85CE3" target="_blank" rel="noopener noreferrer">Smart Contract</a>
            </div>
          </div>
        </article>
      </div>  
    );
  }
}

export default Faucet;