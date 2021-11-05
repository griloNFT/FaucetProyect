import React, { Component } from 'react'

class NotFound extends Component {

  render() {
    return (
      <div class="gradient-border" id="notFound">
        <h2>404 Error</h2>
        <h3>Page not found</h3>
        <form class="btn2" action="/">
          <button className="slide_from_left" type="submit">BACK HOME</button>
        </form>
      </div>
    );
  }
}

export default NotFound;
