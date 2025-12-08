import { useState } from 'react'

//import './App.css'

//custom hook - function beginning with use and using hooks underneath

function useCounter(){ //this is a custom hook
  const [count , setCount] = useState(0);


    function increaseCount(){
      setCount(count=> count+1);
  }

  return{
    count : count,
    increaseCount : increaseCount
  }
  
}

function App() {

  const {count , increaseCount} = useCounter();
  
  return (
    <button onClick={increaseCount}> Increase {count}</button>
  
  )
}

export default App
