import React, { Component } from 'react'
import ReactPlayer from "react-player"

class Home extends Component {


  render() {
    return ( 
        <div>
          <h1>WELCOME TO THE PROYECT COIN MANAGER COMMUNITY!</h1>
          <div id="twitch">
            <ReactPlayer
              url="https://www.twitch.tv/patoverde_pv"
              controls
            />
          </div>
          
        </div>
    );
  }
}

export default Home;