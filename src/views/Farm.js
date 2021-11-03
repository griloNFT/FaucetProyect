import React, { Component } from 'react'

class Farm extends Component {

  render() {

    let ammountToDeposit = 0; 
    let ammountToWithdraw = 0; 

    return (
      <div>
        <h1>FARM</h1>
        <h6>FARM ADDRESS: &nbsp;<b>{this.props.farm._address}</b></h6>
        <h6>PCM ADDRESS: &nbsp;<b>{this.props.tuviella._address}</b></h6>
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
            <td></td>
            <td><div class="btn2" id="claimModal">
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
                </div></td>
          </tfoot>
        </table>
        <div class="btn2" id="boxModal">         
          <div id="depositModal">
            <label class="field field_v1">
              <input 
                class="field__input" 
                placeholder="Minimum amount: 1"              
                type="number"
                min="1"
                onChange={ (event) => ammountToDeposit = event.target.value} 
              />
              <span class="field__label-wrap">
                <span class="field__label">Amount to deposit</span>
              </span>
            </label>
            <button
              disabled={this.props.tuviellaTokenBalance <= 0}
              className="slide_from_left"
              type="submit"
              onClick={(event) => {
                event.preventDefault()
                this.props.deposit(ammountToDeposit)
              }}>
              DEPOSIT
            </button>
          </div>
          <p class="balance">WALLET BALANCE &nbsp;<b>{Math.round(window.web3.utils.fromWei(this.props.tuviellaTokenBalance.toString(), 'Ether')*100)/100 + " PCM"}</b></p>
          <div class="withdrawModal">
            <label class="field field_v1">
              <input 
                class="field__input" 
                placeholder="Minimum amount: 1"
                type="number"
                min="1"               
                onChange={ (event) => ammountToWithdraw = event.target.value} 
              />
              <span class="field__label-wrap">
                <span class="field__label">Amount to withdraw</span>
              </span>
            </label>
            <button
              disabled={this.props.stakingStaked <= 0}
              className="slide_from_left"
              type="submit"
              onClick={(event) => {
                event.preventDefault()
                this.props.withdraw(ammountToWithdraw)
              }}>
              WITHDRAW
            </button>           
          </div>
        </div>
      </div>
    );
  }
}

export default Farm;