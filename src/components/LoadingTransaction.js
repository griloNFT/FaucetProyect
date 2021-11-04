import React, { Component } from 'react'
import { Spinner } from 'reactstrap'

class LoadingTransaction extends Component {

  render() {
    return ( 
      <div><h1>WAITING METAMASK EXTENSION</h1>
        <div class="loader">
          <div class="spinner">
            <Spinner class="circle"/>
          </div>
        </div>
      </div>
    ); 
  }
}

export default LoadingTransaction;