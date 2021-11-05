import React, { Component } from 'react'

class Farm extends Component {

  render() {
    return ( 
      <div>
        <h1>FARM</h1>
        <h6 class="bottom-bar">APY: &nbsp;<b>%</b></h6>
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
               <b>{Math.round(window.web3.utils.fromWei(this.props.stakingStaked.toString(), 'Ether')*100)/100 + " PCM" }</b>
              </td>
              <td>
               <b>{Math.round(window.web3.utils.fromWei(this.props.stakingPending.toString(), 'Ether')*100)/100 + " PCM" }</b>
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
              <span class="field__label">PCM AMOUNT</span>
            </span>
          </label>
        </div>
        <div class="btn2">
          <table>
            <tfoot>
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
          <p>WALLET BALANCE &nbsp;<b>{Math.round(window.web3.utils.fromWei(this.props.tuviellaTokenBalance.toString(), 'Ether')*100)/100 + " PCM"}</b></p>
          <a href="https://testnet.bscscan.com/address/0x2ed14F3261eE8A1F1f38Ac40DD52f2E586Bb47F3" target="_blank" rel="noopener noreferrer">FARM ADDRESS</a>
          <a href="https://testnet.bscscan.com/address/0x62C733e3FaB7087f1077C542765DdD7ce3BC2A17" target="_blank" rel="noopener noreferrer">PCM ADDRESS</a>
        </div>
      </div>
    );
  }
}

export default Farm;