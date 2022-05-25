import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }
  increment(){
    // this.state.count = this.state.count + 1
    this.setState({
      count:this.state.count + 1
    },()=>{
      console.log('Calback value',this.state.count)
    } )
    console.log(this.state.count)
  }
  render() {
    return (
      <div>
          <div>
          <h2>Count: {this.state.count}</h2>
          </div>
          <button onClick={()=>this.increment()}>Increement</button>
      </div>
    )
  }
}

export default Counter