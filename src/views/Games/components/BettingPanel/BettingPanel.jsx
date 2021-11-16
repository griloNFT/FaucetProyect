import React, { Component } from 'react';
import BalancePanel from './BalancePanel/BalancePanel.jsx'
import classes from './BettingPanel.module.css';

class BettingPanel extends Component {
    state = {
        bet: 0,
        stakedBalance: Math.round(this.props.stakingStaked / 1000000000000000000),
        error: ""
    }
    /**
     * Used to handle the click event for betting buttons
     * 
     * @param {eventObject} event - Click event object
     */
    handleChange = (event) => {
        if(event.target.value > this.state.stakedBalance){
            this.setState({error: "Insufficient balance"})
        } else if(event.target.value <= 0){
            this.setState({ error: "Minimum amount 0.01" })
        } else{
            this.setState({ bet: event.target.value, error: "" })
        }
    }
    /**
     * Object used to get the winning colour from a number
     * 
     * @param {integer} win - The winning number of the spin
     * @return {string} - The string of the winning colour ('red', 'green' or 'black')
     */
    getWinningColour = (win) => {
        let out;
        if(win % 2 === 0 && win !== 0){
            out = 'red';
        } else if(win % 2 === 1){
            out = 'black';
        } else if (win === 0){
            out = "green";
        }
        return out
    }
    /**
     * Used to handle a bet
     * 
     * @param {string} colour - The winning colour usually from getWinningColour()
     * @param {integer} result - The integer result of the spin
     */
    betHandler = (colour, result) => {
        let mult = null;
        let old_balance = this.state.stakedBalance;
        this.setState({stakedBalance: old_balance - this.state.bet})
        let winning_colour = this.getWinningColour(parseInt(result));
        if (winning_colour === 'black' || winning_colour === 'red'){
            mult = 2;
        }
        setTimeout(() => {
            if (colour === winning_colour) {
                let current_balance = this.state.stakedBalance;
                let current_bet = this.state.bet;
                let newBalance = current_balance += (current_bet * mult);
                this.setState({ stakedBalance: newBalance })
            }
        }, 8500)

    }
    /**
     * Function used to combine the betHandler and the spin functions on a click of the betting buttons
     * 
     * @param {string} colour - Colour chosen by the user
     */
    clickHandle = (colour) => {
        if (this.state.error === "") {
            let result = this.props.spin();
            this.betHandler(colour, result);
        }

    }
    render() {
        let error = null;
        if(this.state.error){
            error = (
                <p className={classes.error}>{this.state.error}</p>
            )
        }
        return ( 
            <div className={classes.bettingPanel}>
                <h1>{this.props.title}</h1>
                <button
                  disabled={this.state.stakedBalance <= 0}
                  className="slide_from_left"
                  onClick={(event) => {
                    event.preventDefault()
                    this.props.withdrawToken(this.state.stakedBalance)
                  }}>
                  WITHDRAW ALL
                </button>
                <BalancePanel>
                <span>{this.state.stakedBalance}</span>
                </BalancePanel>
                <input className={classes.betInput} type="number" step="1" min="1" max={this.state.stakedBalance} placeholder="Amount" onChange={this.handleChange} />
                {error}
                <div className={classes.betButtons}>
                    <button 
                      className={classes.red} 
                      disabled={this.props.game == true} 
                      onClick={this.clickHandle.bind(this, 'red')}>
                    </button>
                    <button 
                      className={classes.black} 
                      disabled={this.props.game == true}
                      onClick={this.clickHandle.bind(this, 'black')}>
                    </button>
                </div>

                <div class="boxModal">
                  <table>
              <tfoot>
                <tr>
                  <td>           
                    <div class="btn2" id="approveModal">
                      <button
                        disabled={Math.round(this.props.stakingStaked / 1000000000000000000) > 0}
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
                        onClick={(event) => {
                          event.preventDefault()
                          this.props.depositToken(this.props.value)
                        }}>
                        DEPOSIT
                      </button>
                    </td>
                  </tr>
                </tfoot>
              </table> 
            </div>    
            <h4>WALLET BALANCE: &nbsp;<span>{Math.round(window.web3.utils.fromWei(this.props.patoTokenBalance.toString(), 'Ether')*100)/100 + " " + this.props.tokenName.toString()}</span></h4>
            <div class="footerModal">
              <a href="https://testnet.bscscan.com/address/0x5AD196844dfa35C53b72e92A9927653455530503" target="_blank" rel="noopener noreferrer">POOL CONTRACT</a>
              <a href="https://testnet.bscscan.com/address/0x613Aa50c5245C7b3fEFe28f26009216Df754767d" target="_blank" rel="noopener noreferrer">PVP CONTRACT</a>
            </div>
          </div>
            </div>
        )
    }
}

export default BettingPanel
