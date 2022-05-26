import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isloggedIn:true
      }
    }
  render() {
      return this.state.isloggedIn ? (
      <div>Welcome Cheif</div> 
      ):(
      <diV>Welcome Guest</diV>
      )
    //   let message 
    //   if (this.state.isloggedIn){
    //       message = <div><h1>Welcome User Greeting</h1></div>
    //   }else{
    //     message = <div><h1>Welcome Guest</h1></div>
    //   }
    //   return<div>{message}</div>
    //   if(this.state.isloggedIn){
    //     return (
    //         <div>
    //             <h1>Welcome UserGreeting</h1>
    //         </div>
    //       )
    //   } else{
    //     return (
    //         <div>
    //             <h1>Welcome Guest</h1>
    //         </div>
    //       )
    //   }
    // return (
    //   <div>
    //       <h1>Welcome UserGreeting</h1>
    //       <h1>Welcome Guest</h1>
    //   </div>
    // )
  }
}

export default UserGreeting