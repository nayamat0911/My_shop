import React, { Component } from 'react'
import ChildComponent from './childComponent'

export class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parent:"parrent"
      }
      this.greetParent =this.greetParent.bind(this)
    }
    greetParent(clidName){
        alert(`Hello ${this.state.parent} from ${clidName}`)
    }
  render() {
    return (
      <div>
          <ChildComponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent