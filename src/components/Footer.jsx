import React, { Component } from 'react'
import Twitch from '../images/twitch_logo.png'
import Telegram from '../images/telegram_logo.png'
import Discord from '../images/discord_logo.png'
import Twitter from '../images/twitter_logo.png'
import YouTube from '../images/tube_logo.png'
import Instagram from '../images/instagram.png'

class Footer extends Component {

  render() {
    return (
      <div>
        <div id="about">
          <a href="/">CHART</a>
          <a href="/">GITHUB</a>
          <a href="https://leandrodenos.gitbook.io/pato-verde-projects/faucet-project/detalles/">DOCS</a>
          <a href="https://medium.com/">BLOG</a>
        </div>
        <div id="social">
          <a href="https://www.youtube.com/channel/UCoxr0mC9BpLIpajYDepgnFQ/featured" target="_blank" rel="noopener noreferrer">
            <img src={YouTube} width="40" height="40" className="d-inline-block align-top" alt="" />
          </a>
          <a href="https:/instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} width="35" height="35" className="d-inline-block align-top" alt="" />
          </a>
          <a href="https://t.me/Onepiecetokenofficial" target="_blank" rel="noopener noreferrer">
            <img src={Telegram} width="35" height="35" className="d-inline-block align-top" alt="" />
          </a>
          <a href="https://twitter.com/OnepiezeBSC1" target="_blank" rel="noopener noreferrer">
            <img src={Twitter} width="35" height="35" className="d-inline-block align-top" alt="" />
          </a>
          <a href="https://discord.gg/whfCeyXQ" target="_blank" rel="noopener noreferrer">
            <img src={Discord} width="35" height="35" className="d-inline-block align-top" alt="" />
          </a>
          <a href="https://www.twitch.tv/patoverde_pv" target="_blank" rel="noopener noreferrer">
            <img src={Twitch} width="35" height="35" className="d-inline-block align-top" alt="" />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
