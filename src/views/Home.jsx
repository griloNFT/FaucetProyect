import React, { Component } from 'react'
import ReactPlayer from "react-player"

class Home extends Component {


  render() {
    return (
      <article>
        <h1 class="titles">WELCOME TO THE PVP COMMUNITY!</h1>
        {/* <div>
          <div id="twitch">
            <ReactPlayer
              width="640"
              height="360"
              url="https://www.twitch.tv/patoverde_pv"
              controls
            />
          </div>  
        </div> */}
      </article>
    );
  }
}

export default Home;