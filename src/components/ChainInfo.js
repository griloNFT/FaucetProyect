import React, { Component } from 'react'

class ChainInfo extends Component {

  render() {

    return ( 
    <div>
      <h2>Wrong network, please connect to the following network:</h2>
      <h3>{this.props.chain.name}</h3>
      <p><b>RPC URL: </b>{this.props.chain.rpcUrl}</p>
      <p><b>ID: </b>{this.props.chain.id}</p>
      <p><b>SYMBOL: </b>{this.props.chain.symbol}</p>
      <p><b>BLOCK EXPLORER URL: </b>{this.props.chain.blockExplorerUrl}</p>
    </div>
    );
  }
}

export default ChainInfo;
