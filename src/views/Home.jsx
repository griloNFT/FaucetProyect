import React, { Component } from 'react'
import ReactPlayer from "react-player"
import Tokenomics from '../images/tokenomics.png'
import Portada from '../images/patologo.png'


class Home extends Component {

  render() {
    return (
      <div>
        <h1 class="titles">PVP COMMUNITY</h1>
        <p><img src={Portada} class="logo" /></p>
        <article>
          <div class="boxModal">
            <div>
              <h3>WHAT IS PVP?</h3>
              <p>
                Pato Verde Projects (PVP) is a community that it is focused on people who wants to study development of decentralized applications and smart contracts on the blockchain
                and wants to launch his project together with members of the community or with his own work team
              </p>
            </div>
            <div>
              <h3>WHAT CAN YOU DO WITH PVP APP?</h3>
              <p>
                1. Claim free PVP tokens and NFTs on the app every 24 hours!
                (Free claims will be available until 12/31/2021 23:59 UTC)
              </p>
              <p>   
                2. Deposit PVP tokens in the pool to be rewarded with more PVP tokens!
              </p>
              <p>  
                3. Create or vote project ideas on blockchain with PVP tokens!
              </p>
              <p>  
                4. Manage NFT market place PVP tokens!
              </p>
            </div>
            <div>
              <h3>ARE YOU A INFLUENCER?</h3>
              <p>If you are a small or big influencer you can request for the creation of your project or token on the blockchain free!</p>
              <p>In the future we will implement Api Twitch for important streamers that want to interact with followers using blockchain web3. </p>
            </div>
            <div>
              <h3>TOKENOMICS</h3>
              <img id="tokenomics" src={Tokenomics} width="250" height="250" alt="" />
              <p>
                TOTAL SUPPLY: 10.000.000 PVP
              </p>
              <p>
                MAX SUPPLY: 21.000.000 PVP 
              </p>
            </div>
          </div> 
        </article>
        <div class="boxModal" id="twitch">
          <h3>STREAM</h3>
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