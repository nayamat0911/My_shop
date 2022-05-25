import React, { Component } from "react";

class Message_2 extends Component{
    constructor(){
        super()
            this.state={
                message:"WELCOME VISITOR"
        }
    }
    changeMessage(){
            this.setState({
                message:"Thanks For subscribed the chanel"
            })
    }
    render(){
        return(
            <dev>
                <h3>
                    {this.state.message}
                </h3>
                <button onClick={()=>this.changeMessage()}>subscribe</button>
            </dev>
        )
    }
}
export default Message_2