import React, { Component } from 'react'

class AddTokenButton extends Component {

  render() {
    return (
      <button
        class="btn first"
        onClick={(event) => {
        event.preventDefault()
        this.props.addTuviellaToken()
        }}>
      Add Token to Metamask
      </button>
    );
  }
}

export default AddTokenButton;
