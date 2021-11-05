import React, { Component } from 'react'
import { Spinner } from 'reactstrap'

class Loading extends Component {

  render() {
    return ( 
      <div><h1>LOADING DAPP</h1>
        <div class="loader">
          <div class="spinner">
            <Spinner class="circle"/>
          </div>
        </div>
      </div>
    ); 
  }
}

export default Loading;