import React, { Component } from 'react'
import ReactPlayer from "react-player"
import Tokenomics from '../images/tokenomics.png'


class Home extends Component {

  render() {
    return (
      <div>
        <h1 class="titles">Pato Verde Projects (PVP)</h1>
        <article>
          <div class="homes2">
            <h3>Your Stats</h3>
            <div>
              <h4>Total PVP In Pool (Deposit + Profit): &nbsp;</h4>       
              <h5>{(this.props.stakingStaked + this.props.stakingPending) / 1000000000000000000 + " " + this.props.tokenSymbol.toString()}</h5> 
              <h4>Wallet Balance: &nbsp;</h4>     
              <h5>{Math.round(window.web3.utils.fromWei(this.props.patoTokenBalance.toString(), 'Ether')*100)/100 + " " + this.props.tokenSymbol.toString()}</h5>
            </div>
          </div> 
        </article>
        <article>
          <div class="homes2">
            <h3>PVP Stats</h3>
            <div>
              <h4>Name:</h4>
              <h5>{this.props.tokenName}</h5>
              <h4>Symbol: &nbsp;</h4>
              <h5>{this.props.tokenSymbol}</h5>
              <h4>Total Supply: &nbsp;</h4>
              <h5>{Math.round(window.web3.utils.fromWei(this.props.totalSupply.toString(), 'Ether')*100)/100}</h5>
              <h4>Max Supply: &nbsp;</h4>
              <h5>{Math.round(window.web3.utils.fromWei(this.props.maxSupply.toString(), 'Ether')*100)/100}</h5>
            </div>
            <h3>Claim Stats</h3>
            <div>
              <h4>Available PVP To Claim: &nbsp;</h4>     
              <h5>{this.props.faucetPatoTokenBalance / 1000000000000000000}</h5>
            </div>
            <h3>Pool Stats</h3>
            <div>
              <h4>Active Deposits: &nbsp;</h4>
              <h5>{this.props.rewardsActive}</h5>
              <h4>Active Withdrawals: &nbsp;</h4>
              <h5>{this.props.rewardsActive}</h5>
              <h4>Active Rewards: &nbsp;</h4>
              <h5>{this.props.rewardsActive}</h5>
              <h4>Total PVP Deposited In Pool: &nbsp;</h4>
              <h5>{Math.round(this.props.tokensInPool / 1000000000000000000)}</h5>
              <h4>PVP Rewards Per Day: &nbsp;</h4>
              <h5>{this.props.patoPerBlock / 1000000000000000000}</h5>
            </div>
          </div> 
        </article>
        <article>
          <div class="homes">
            <h3>Frequent Questions</h3>
            <div>
              <h4>1. What is PVP?</h4>
              <p>
                - Pato Verde Projects (PVP) is a community that it is focused on people who wants to study development of decentralized applications and smart contracts on the blockchain
                and wants to launch his project together with members of the community or with his own work team.
              </p>
            </div>
            <div>
              <h4>2. What can you do with PVP Token?</h4>
              <p>
                - Claim free PVP tokens and NFTs on the app every 24 hours!
                (Free claims will be available until 12/31/2021 23:59 UTC)
              </p>
              <p>   
                - Deposit PVP tokens in the pool to be rewarded with more PVP tokens!
              </p>
              <p>  
                - Create or vote project ideas on blockchain with PVP tokens!
              </p>
              <p>  
                - Manage NFT Market Place PVP tokens!
              </p>
            </div>
            <div>
              <h4>3. Are you an influencer?</h4>
              <p>- If you are a small or big influencer you can request for the creation of your project on the blockchain free!</p>
              <p>- In the future we will implement Api Twitch for important streamers that want to interact with followers using blockchain web3. </p>
            </div>
          </div>   
        </article>
        <div id="twitch">
          <div>
            <ReactPlayer
              width="640"
              height="360"
              url="https://www.twitch.tv/patoverde_pv"
              controls
            />
          </div> 
        </div> 
      </div>
    );
  }
}

export default Home;