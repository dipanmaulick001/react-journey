import { useState , useContext, Provider , createContext} from 'react'
import './App.css'

const BulbContext = createContext(); //step1

function App() {
  const [bulbOn, setBulbOn] = useState(true);


  return(
    //step 2: provide value to the context
    <BulbContext.Provider value={{bulbOn,setBulbOn}}> 
        <Light/> 
    </BulbContext.Provider>
    
  )
}

function Light(){ 

  return <div>
    <BulbState/>
    <LightSwitch/> 
  </div>
}

function BulbState(){
  const {bulbOn} = useContext(BulbContext);  //step 3 : use the context 

  return <div>
    {bulbOn ? "Bulb on" : "Bulb off"}
  </div>
}

function LightSwitch(){
  const {setBulbOn} = useContext(BulbContext); //step 3

  function toggleSwitch(){
    setBulbOn( currentState => !currentState)
  }
  return <div>
    <button onClick={toggleSwitch}> Turn on/off</button> 
  </div>
}

//example of using Context API -to solve the problem of prop drilling or unoptimal rerendering.

export default App

