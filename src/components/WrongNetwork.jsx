import React, { Component } from 'react'

class WrongNetwork extends Component {

  render() {

    return (
      <article>
        <h2>WRONG NETWORK! PLEASE CONNECT TO BSC - MAINNET</h2>
        <div class="boxModal">
          <h3>BSC - MAINNET</h3>
          <h4>https://bsc-dataseed.binance.org/</h4>
          <h4>56</h4 >
          <h4>BNB</h4>
          <h4>https://bscscan.com/</h4>
          <form class="btn2" action="/">
            <button
              class="btn first"
              onClick={(event) => {
                event.preventDefault()
                this.props.addNetwork()
              }}>
              ADD NETWORK
            </button>
            <button 
              className="slide_from_left" 
              type="submit"
            >
              REFRESH
            </button>
          </form>
        </div>
      </article>
    );
  }
}

export default WrongNetwork;
