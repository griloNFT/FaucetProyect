import React, { Component } from 'react'

class NotFound extends Component {

  render() {
    return (
      <div>
        <h2 class="titles">404 ERROR</h2>
        <div class="boxModal">
        <h6>PAGE NOT FOUND</h6>
          <form action="/">
            <button 
              class="btn1" 
              type="submit"
            >
              BACK HOME
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default NotFound;
