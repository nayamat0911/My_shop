import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'hello'
      }
    //   this.clikHandler = this.clikHandler.bind(this)
    }
    clikHandler(){
        this.setState({
            message:'Good Bye'
        })
        console.log(this)
    }
  render() {
    return (
      <div>
          <div>{this.state.message}</div>
          {/* <button onClick={this.clikHandler.bind(this)}>Clik</button> */}
          <button onClick={()=>this.clikHandler()}>Clik</button>
          {/* <button onClick={this.clikHandler}>Clik</button> */}
      </div>
    )
  }
}

export default EventBind