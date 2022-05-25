import React from "react";

// function Greet(){
//     return <h1>Hello Greet</h1>
// }

const Greet = props =>{
    const {name,heroName} =props
    
    return(
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
            
            <button onClick={()=>onchange()}>Action</button>
        </div>
        
    ) 
}

export default Greet