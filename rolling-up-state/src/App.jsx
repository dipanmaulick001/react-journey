import { useState } from 'react'
import './App.css'

function App() {

  return(
    <Light/>
  )
}

function Light(){
  const [bulbOn , setBulbOn] = useState(true);  //rolling up the state

  return <div>
    <BulbState bulbOn={bulbOn}/>
    <LightSwitch setBulbOn={setBulbOn}/> 
  </div>
  //passing as props to the children( not prop drilling)
}

function BulbState({bulbOn}){
  //const [bulbOn, setBulbOn] = useState(true); rollback this to the lowest common ancestor

  return <div>
    {bulbOn ? "Bulb on" : "Bulb off"}
  </div>
}



function LightSwitch({setBulbOn}){

  function toggleSwitch(){
    setBulbOn( currentState => !currentState)
  }
  return <div>
    <button onClick={toggleSwitch()}> Turn on/off</button> 
  </div>
}

export default App
