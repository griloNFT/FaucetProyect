import React, { Component } from 'react'
import { Spinner } from 'reactstrap'

class LoadingPage extends Component {

  render() {
    return ( 
      <div>
        <article>
          <h1>Loading</h1>
          <div class="loader">
            <div class="spinner">
              <Spinner class="circle"/>
            </div>
          </div>
        </article>
      </div>
    ); 
  }
}

export default LoadingPage;