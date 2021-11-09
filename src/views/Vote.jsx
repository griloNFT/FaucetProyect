import React, { Component } from 'react'
import Twitch from '../images/twitch_logo.png'
import Github from '../images/github_logo.png'
import Telegram from '../images/telegram_logo.png'
import Discord from '../images/discord_logo.png'
import Twitter from '../images/twitter_logo.png'
import YouTube from '../images/tube_logo.png'

class Pool extends Component {

  render() {
    return ( 
      <article>
        <h1>MANAGE YOUR PROJECT IDEAS WITH PVP TOKENS</h1>
      <div class="boxModal">
        <table>
          <thead>
            <tr>
              <th>PROJECT NAME</th>
              <th>ACTUAL MEMBERS</th>
              <th>MEMBERS WANTED</th>
              <th>PRESALE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SHIBA</td>
              <td>3</td>
              <td>5</td>
              <td>YES</td>
            </tr>
          </tbody>
        </table>
        <h3>SHIBA</h3>
        <span>Lorem Ipsum askhdkalaskl asidhasidlaskd adldikalsd iashjasikld kasdhaskldlasd kasklsahdlksd askdlasdjalkdasd askldajskldasldasd asdadasdklad</span>
        <div class="social">
          <a href="https://www.twitch.tv/patoverde_pv" target="_blank" rel="noopener noreferrer">
            <img src={Twitch} width="20" height="20" className="d-inline-block align-top" alt="" />
          </a>
          <a href="https://www.youtube.com/channel/UCoxr0mC9BpLIpajYDepgnFQ/featured" target="_blank" rel="noopener noreferrer">
            <img src={YouTube} width="20" height="20" className="d-inline-block align-top" alt="" />
          </a>
          <a href="https://github.com/PatoProyects2/FaucetProyect" target="_blank" rel="noopener noreferrer">
            <img src={Github} width="20" height="20" className="d-inline-block align-top" alt="" />
          </a>
          <a href="https://t.me/Onepiecetokenofficial" target="_blank" rel="noopener noreferrer">
            <img src={Telegram} width="20" height="20" className="d-inline-block align-top" alt="" />
          </a>
          <a href="https://discord.gg/whfCeyXQ" target="_blank" rel="noopener noreferrer">
            <img src={Discord} width="20" height="20" className="d-inline-block align-top" alt="" />
          </a>
          <a href="https://twitter.com/OnepiezeBSC1" target="_blank" rel="noopener noreferrer">
            <img src={Twitter} width="20" height="20" className="d-inline-block align-top" alt="" />
          </a>
        </div>
        &nbsp;
        <h4>IF THIS PROYECT WIN</h4>
        <p><span>1. ENTER TO PRESALE WHITELIST</span></p>
        <p><span>2. THE 5 PEOPLE WHO HAVE CONTRIBUTED THE MOST TO THE POOL WILL HAVE THE OPTION TO PARTICIPATE IN THIS PROJECT</span></p>
        <h4>IF THIS PROYECT LOSE</h4>
        <p><span>1. YOU CAN CLAIM AGAIN YOUR VOTES BACK</span></p>
        <table>
          <thead>
            <tr>
              <th scope="col">YOUR VOTES</th>
              <th scope="col">TOTAL VOTES</th>  
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {Math.round(window.web3.utils.fromWei(this.props.stakingStaked.toString(), 'Ether')*100)/100 + " " + this.props.tokenName.toString()}
              </td>
              <td>
                {Math.round(window.web3.utils.fromWei(this.props.stakingStaked.toString(), 'Ether')*100)/100 + " " + this.props.tokenName.toString()}
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
      <a href="https://testnet.bscscan.com/address/0x5AD196844dfa35C53b72e92A9927653455530503" target="_blank" rel="noopener noreferrer">VOTE CONTRACT</a>
      <a href="https://testnet.bscscan.com/address/0x613Aa50c5245C7b3fEFe28f26009216Df754767d" target="_blank" rel="noopener noreferrer">PVP CONTRACT</a> 
      </article>
    );
  }
}

export default Pool;