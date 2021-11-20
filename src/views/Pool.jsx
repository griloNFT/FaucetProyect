import React, { Component } from 'react'

class Pool extends Component {

  render() {
    let decimals = 1000000000000000000;
    return (
      <div>
        <h1 class="titles">Active Pools (1)</h1>
        <article> 
          <div class="boxModal">
            <h3>PVP</h3>   
            <table>
              <thead>
                <tr>
                  <th scope="col">Deposit</th>
                  <th scope="col">Profit</th>
               </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {Math.round(window.web3.utils.fromWei(this.props.stakingStaked.toString(), 'Ether')*100)/100}
                  </td>
                  <td>
                    {Math.round(window.web3.utils.fromWei(this.props.stakingPending.toString(), 'Ether')*100)/100}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>           
                    <div class="btn2" id="approveModal">
                      <button
                        disabled={this.props.stakingStaked > 0}
                        className="slide_from_left" 
                        type="submit"
                        onClick={(event) => {
                          event.preventDefault()
                          this.props.approveToken(this.props.approveValue)
                        }}>
                        APPROVE
                      </button>
                   </div>
                 </td>  
                 <td>
                    <div class="btn2" id="claimModal">
                      <button
                        disabled={this.props.stakingPending <= 0}
                        className="slide_from_left"
                        type="submit"             
                        onClick={(event) => {
                          event.preventDefault()
                          this.props.harvestToken()
                        }}>
                        CLAIM
                      </button>
                    </div>
                  </td> 
                </tr>    
              </tfoot>
            </table> 
            <div>
              <label class="field field_v1">
                <input
                  class="field__input" 
                  placeholder="Minimum amount: 1"              
                  type="number"
                  min="1"
                  max={Math.round(this.props.patoTokenBalance) / decimals}
                  onChange={this.props.handleChange} 
                />
                <span class="field__label-wrap">
                  <span class="field__label">PVP Amount</span>
                </span>
              </label>
            </div>
            <div class="btn2">
              <table>
                <tfoot id="farmButton">
                  <tr>
                    <td>
                      <button
                        disabled={this.props.value <= 0}
                        className="slide_from_left"
                        type="submit"
                        onClick={(event) => {
                          event.preventDefault()
                          this.props.depositToken(this.props.value)
                        }}>
                        DEPOSIT
                      </button>
                    </td>
                    <td>
                      <button
                        disabled={this.props.value <= 0}
                        className="slide_from_left"
                        type="submit"
                        onClick={(event) => {
                          event.preventDefault()
                          this.props.withdrawToken(this.props.value)
                        }}>
                        WITHDRAW
                      </button>
                    </td>
                  </tr>
                </tfoot>
              </table> 
            </div>    
            <h4>Wallet Balance: &nbsp;<span>{Math.round(window.web3.utils.fromWei(this.props.patoTokenBalance.toString(), 'Ether')*100)/100 + " " + this.props.tokenSymbol.toString()}</span></h4>
            <div class="footerModal">
              <h3>Info</h3>
              <p>
                2% fee in withdrawals.
              </p>
              <p>
                In this section you can stake your PVP tokens and earn more PVP tokens. Actually the reward per block are 1440 PVP tokens per day.
              </p>
              <a href="https://testnet.bscscan.com/address/0x5b34962406c8963f694dA4C84a82Fc98D7705caa" target="_blank" rel="noopener noreferrer">Smart Contract</a>
            </div>
          </div>
        </article>
      </div> 
    );
  }
}

export default Pool;