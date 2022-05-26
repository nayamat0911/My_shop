import React from 'react'

function ChildComponent(props) {
  return (
        <div>
            <div>parentcomponent from ChildComponent</div>
            <button onClick={()=> props.greetHandler('child')}>Action</button>
        </div>
  )
}
export default ChildComponent