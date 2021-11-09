import React, { Component } from 'react'
import ReactPlayer from "react-player"

class Home extends Component {


  render() {
    return (
      <article>
        <h1>WELCOME TO THE PROYECT COIN MANAGER COMMUNITY!</h1>
        <div>
          
          <div id="twitch">
            <ReactPlayer
              url="https://www.twitch.tv/patoverde_pv"
              controls
            />
          </div>  
        </div>
      </article>
    );
  }
}

export default Home;