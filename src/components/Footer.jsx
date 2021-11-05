import React, { Component } from 'react'
import Twitch from '../images/twitch_logo.png'
import Github from '../images/github_logo.png'
import Telegram from '../images/telegram_logo.png'
import Discord from '../images/discord_logo.png'
import Twitter from '../images/twitter_logo.png'

class Footer extends Component {

  render() {
    return (
      <div>
        <div id="about">
          <h6>ABOUT</h6>
          <a href="/">Chart</a>
          <a href="/">Tokenomics</a>
          <a href="/">Roadmap</a>
        </div>
        <div id="social">
          <a href="https://www.twitch.tv/patoverde_pv" target="_blank" rel="noopener noreferrer">
            <img src={Twitch} width="20" height="20" className="d-inline-block align-top" alt="" />
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
      </div>
    );
  }
}

export default Footer;
