import React, { Component } from 'react'

class Pool extends Component {

  render() {
    return ( 
      <div>
        <h1>POOL</h1>
        <h6 class="bottom-bar">ESTIMATED REWARDS: &nbsp;<b>0 PVP /DAY</b></h6>
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
               <b>{Math.round(window.web3.utils.fromWei(this.props.stakingStaked.toString(), 'Ether')*100)/100 + " PVP" }</b>
              </td>
              <td>
               <b>{Math.round(window.web3.utils.fromWei(this.props.stakingPending.toString(), 'Ether')*100)/100 + " PVP" }</b>
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
              <span class="field__label">PATO AMOUNT</span>
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
        <div class="footerModal">     
          <p>WALLET BALANCE &nbsp;<b>{Math.round(window.web3.utils.fromWei(this.props.patoTokenBalance.toString(), 'Ether')*100)/100 + " PVP"}</b></p>
          <a href="https://testnet.bscscan.com/address/0x5AD196844dfa35C53b72e92A9927653455530503" target="_blank" rel="noopener noreferrer">FARM CONTRACT</a>
          <a href="https://testnet.bscscan.com/address/0x613Aa50c5245C7b3fEFe28f26009216Df754767d" target="_blank" rel="noopener noreferrer">PVP CONTRACT</a>
        </div>
      </div>
    );
  }
}

export default Pool;