import React, { Component } from 'react'

class Nft extends Component {

  render() {
    return ( 
      <article>
        <h1>CLAIM PVP NFT WITH PVP TOKENS</h1>
      
        <div class="boxModal">       
          <table>
            <thead>
              <tr>
                <th scope="col">NAME</th>
                <th scope="col">SYMBOL</th>
                <th scope="col">PRICE</th>                     
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {this.props.nftName}
                </td>
                <td>
                  {this.props.nftSymbol}
                </td>
                <td>
                  {this.props.nftCost} BNB
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tfoot>
          </table>
          <table>
            <thead>
              <tr>
                <th scope="col">MINTS</th>                     
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {this.props.actualMint} / {this.props.maxMint}
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
                      CLAIM 1 PVP NFT
                    </button>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
          <h6>WALLET BALANCE: &nbsp;<span>{this.props.nftBalance} PATO_NFT</span></h6>
         
        </div>
        <a href="https://testnet.bscscan.com/address/0x3B709314Bc7213C6784b0a8a1Dcbd5cAB02B8f12" target="_blank" rel="noopener noreferrer">PATO_NFT CONTRACT</a>
          <a href={this.props.nftUri} target="_blank" rel="noopener noreferrer">NFT METADATA</a>
      </article>
    );
  }
}

export default Nft;