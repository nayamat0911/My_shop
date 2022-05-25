import React, { Component } from 'react'

export class classClick extends Component {
    clickHandler(){
        console.log('Clciked the button')
    }
  render() {
    return (
      <button onClick={this.clickHandler}>Click me</button>
    )
  }
}

export default classClick