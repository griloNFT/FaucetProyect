import React, { Component } from 'react'

class WrongNetwork extends Component {

  render() {

    return ( 
    <div>
      <h2>Wrong network, please connect to the following network:</h2>
      <h6>BSC - TESTNET</h6>
      <h6>RPC URL: &nbsp;<span>https://data-seed-prebsc-1-s1.binance.org:8545/</span></h6>
      <h6>ID: &nbsp;<span>97</span></h6>
      <h6>SYMBOL: &nbsp;<span>BNB</span></h6>
      <h6>BLOCK EXPLORER URL: &nbsp;<span>https://testnet.bscscan.com/</span></h6>
      <form class="btn2" action="/">
        <button className="slide_from_left" type="submit">REFRESH PAGE</button>
      </form>
    </div>
    );
  }
}

export default WrongNetwork;
