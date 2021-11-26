import React, { Component } from 'react'

class WrongNetwork extends Component {

  render() {

    return (
      <div>
        <h2 class="titles">INVALID NETWORK</h2>
        <article>
          <div class="boxModal">
            <h3>BSC - MAINNET</h3>
            <h4>https://bsc-dataseed.binance.org/</h4>
            <h4>56</h4 >
            <h4>BNB</h4>
            <h4>https://bscscan.com/</h4>
            <button
              class="btn1"
              onClick={(event) => {
                event.preventDefault()
                this.props.addNetwork()
              }}>
              ADD NETWORK
            </button>
            <form action="/">
              <button 
                class="btn1" 
                type="submit"
              >
                BACK HOME
              </button>
            </form>
          </div>
        </article>
      </div>
    );
  }
}

export default WrongNetwork;
