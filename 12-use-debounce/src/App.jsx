import { useEffect, useState } from 'react'
import './hooks/usedebounce.js'
import { useDebounce } from './hooks/usedebounce.js';


//import './App.css'

function App(){
  const [inputVal , setInputVal] = useState("");
  const debouncedVal = useDebounce(inputVal , 250);

  function change(e){
      setInputVal(e.target.value);
  }

  useEffect(() => {
    console.log("expensive operation");

  },[debouncedVal])

  return <>
    <input type='text' onChange={change}></input>
  </>

}


export default App
