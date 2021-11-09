import React, { Component } from 'react'

class Pool extends Component {

  render() {
    return ( 
      <article>
        <h1>STAKE YOUR PVP TOKENS AND EARN REWARDS</h1>
      <div class="boxModal">
        <table>
          <thead>
            <tr>
              <th scope="col">DEPOSIT</th>
              <th scope="col">PROFIT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span>{Math.round(window.web3.utils.fromWei(this.props.stakingStaked.toString(), 'Ether')*100)/100 + " " + this.props.tokenName.toString()}</span>
              </td>
              <td>
                <span>{Math.round(window.web3.utils.fromWei(this.props.stakingPending.toString(), 'Ether')*100)/100 + " " + this.props.tokenName.toString()}</span>
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
                      this.props.approve(this.props.approveValue)
                    }}>
                    APPROVE DEPOSIT
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
                      this.props.harvest()
                    }}>
                    CLAIM PROFIT
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
              onChange={this.props.handleChange} 
            />
            <span class="field__label-wrap">
              <span class="field__label">PVP AMOUNT</span>
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
                      this.props.deposit(this.props.value)
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
                      this.props.withdraw(this.props.value)
                    }}>
                  WITHDRAW
                  </button>
                </td>
              </tr>
            </tfoot>
          </table> 
        </div>    
          <h6>WALLET BALANCE: &nbsp;<span>{Math.round(window.web3.utils.fromWei(this.props.patoTokenBalance.toString(), 'Ether')*100)/100 + " " + this.props.tokenName.toString()}</span></h6>
         
      </div>
      <a href="https://testnet.bscscan.com/address/0x5AD196844dfa35C53b72e92A9927653455530503" target="_blank" rel="noopener noreferrer">POOL CONTRACT</a>
          <a href="https://testnet.bscscan.com/address/0x613Aa50c5245C7b3fEFe28f26009216Df754767d" target="_blank" rel="noopener noreferrer">PVP CONTRACT</a>
      </article>
    );
  }
}

export default Pool;