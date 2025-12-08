import { useState } from 'react'
import './App.css'

function App() {
  const [bulbOn , setBulbOn] = useState(true); //state intialization here

  return(
    <Light bulbOn={bulbOn} setBulbOn={setBulbOn}/> 
  )
}

function Light({bulbOn , setBulbOn}){ //this component doesnt even require the variables but still passes here as props

  return <div>
    <BulbState bulbOn={bulbOn}/>
    <LightSwitch setBulbOn={setBulbOn}/> 
  </div>
}

function BulbState({bulbOn}){

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

//This is a classic example of prop drilling which is a problem , that needs to be solved.

export default App
