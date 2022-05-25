import React, {Component} from "react";

class Welcome extends Component{
    
    render(){
        const {name,heroName} = this.props
        // const {stat1, state2} = this.state
        return ( 
            <div>
                <h1>Hello {name} profe {heroName}</h1>
                {/* <p>{children}</p> */}
            </div>
        )
        
    }
}

export default Welcome