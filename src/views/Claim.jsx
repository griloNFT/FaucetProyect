import React, { Component } from 'react'

class Faucet extends Component {

  render() {
    return (
      <div>
        <h1 class="titles">CLAIM FREE PVP EVERY 24 HOURS</h1>
        <article>
          <div class="boxModal">    
            <table>
              <thead>
                <tr>
                  <th scope="col">AVAILABE TOKENS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> 
                    {Math.round(window.web3.utils.fromWei(this.props.faucetPatoTokenBalance.toString(), 'Ether')*100)/100 + " " + this.props.tokenName.toString()}
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
            <h6>WALLET BALANCE: &nbsp;<span>{Math.round(window.web3.utils.fromWei(this.props.patoTokenBalance.toString(), 'Ether')*100)/100 + " " + this.props.tokenName.toString()}</span></h6>
            <div class="footerModal">
              <a href="https://testnet.bscscan.com/address/0xE99E1B538c718C2F637845F303e0146Df4c85CE3" target="_blank" rel="noopener noreferrer">FAUCET CONTRACT</a>
              <a href="https://testnet.bscscan.com/address/0x613Aa50c5245C7b3fEFe28f26009216Df754767d" target="_blank" rel="noopener noreferrer">PVP CONTRACT</a>
            </div>
          </div>
          <div class="boxModal">       
            <table>
              <thead>
                <tr>
                  <th scope="col">AVAILABE NFTS</th>                     
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {Math.round (this.props.maxMint - this.props.actualMint) + " " + this.props.nftName}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>
                    <div class="btn2">
                      <button
                        className="slide_from_left"
                        onClick={(event) => {
                          event.preventDefault()
                          this.props.claimNFTs(1)
                        }}>
                        CLAIM FREE
                      </button>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
            <h6>WALLET BALANCE: &nbsp;<span>{this.props.nftBalance} {this.props.nftName}</span></h6>
              <div class="footerModal">
                <a href="https://testnet.bscscan.com/address/0x3B709314Bc7213C6784b0a8a1Dcbd5cAB02B8f12" target="_blank" rel="noopener noreferrer">PATO_NFT CONTRACT</a>
                <a href={this.props.nftUri} target="_blank" rel="noopener noreferrer">NFT METADATA</a>
              </div>
            </div>
        </article>
      </div>  
    );
  }
}

export default Faucet;