import React, { Component } from 'react'

class NotFound extends Component {

  render() {
    return (
      <div>
        <h2>404 ERROR</h2>
        <h6>PAGE NOT FOUND</h6>
        <form class="btn2" action="/">
          <button className="slide_from_left" type="submit">BACK HOME</button>
        </form>
      </div>
    );
  }
}

export default NotFound;
