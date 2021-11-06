import React, { Component } from 'react'

class ChainInfo extends Component {

  render() {

    return ( 
    <div>
      <h2>Wrong network, please connect to the following network:</h2>
      <h3>BSC - TESTNET</h3>
      <p><b>RPC URL: &nbsp;</b>https://data-seed-prebsc-1-s1.binance.org:8545/</p>
      <p><b>ID: &nbsp;</b>97</p>
      <p><b>SYMBOL: &nbsp;</b>BNB</p>
      <p><b>BLOCK EXPLORER URL: &nbsp;</b>https://testnet.bscscan.com/</p>
      <form class="btn2" action="/">
        <button className="slide_from_left" type="submit">REFRESH PAGE</button>
      </form>
    </div>
    );
  }
}

export default ChainInfo;
