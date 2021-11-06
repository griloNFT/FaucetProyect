import React, { Component } from 'react'
import patoIcon from '../images/patologo.png'

class Pool extends Component {

  render() {
    return ( 
      <div>
        <h1>VOTE</h1>
        <img src={patoIcon} width="70" height="70" className="d-inline-block align-top" alt="" />
        <table>
          <thead>
            <tr>
              <th>PROYECT NAME</th>
              <th>ACTUAL MEMBERS</th>
              <th>MEMBERS WANTED</th>
              <th>PRESALE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PROYECT1 SHIBA</td>
              <td>3 MEMBERS</td>
              <td>5 MEMBERS</td>
              <td>YES</td>
            </tr>
          </tbody>
        </table>
        <h3>PROYECT INFORMATION: <span>Lorem Ipsum askhdkalaskl asidhasidlaskd adldikalsd iashjasikld kasdhaskldlasd kasklsahdlksd askdlasdjalkdasd askldajskldasldasd asdadasdklad</span></h3>
        <h3>EXTERNAL LINKS: <a href="/">MEDIUM</a>&nbsp;<a href="/">YOUTUBE</a>&nbsp;<a href="/">IMAGES</a>&nbsp;<a href="/">GITHUB</a></h3>
        &nbsp;
        <h4>IF THIS PROYECT IS THE WINNER YOU CAN´T CLAIM YOUR VOTES BACK, BUT YOU WILL OBTAIN THIS REWARDS:</h4>
        <p>- ENTER TO PRESALE WHITELIST</p>
        <p>- THE 5 PEOPLE WHO HAVE CONTRIBUTED THE MOST TO THE POOL WILL HAVE THE OPTION TO PARTICIPATE IN THE PROJECT</p>
        <h4>IF THIS PROYECT IS NOT A WINNER YOU CAN CLAIM YOUR VOTES BACK!</h4>
        
        

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
          <h6>WALLET BALANCE &nbsp;<span>{Math.round(window.web3.utils.fromWei(this.props.patoTokenBalance.toString(), 'Ether')*100)/100 + " " + this.props.tokenName.toString()}</span></h6>
          <a href="https://testnet.bscscan.com/address/0x5AD196844dfa35C53b72e92A9927653455530503" target="_blank" rel="noopener noreferrer">VOTE CONTRACT</a>
          <a href="https://testnet.bscscan.com/address/0x613Aa50c5245C7b3fEFe28f26009216Df754767d" target="_blank" rel="noopener noreferrer">PVP CONTRACT</a>
        </div>
      </div>
    );
  }
}

export default Pool;