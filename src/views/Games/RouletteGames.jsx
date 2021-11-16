import React, { Component } from 'react';
import classes from './App.module.css';
import Roulette from './components/Roulette/Roulette.jsx';

/**
 * Base App Component which is rendered in the ReactDOM.render() function in index.js
 */
class RouletteGames extends Component{

  render() {
    return (
      <div className={classes.App}>
        <Roulette />
      </div>
    )
  }
}

export default RouletteGames;
