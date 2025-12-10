import { useState } from 'react'
import './App.css'

import { usePrev } from './hooks/useprev'

function App(){
  const [count , setCount] = useState(0); //1=>2
  const prev = usePrev(count); //1

  return <>
    <p>{count}</p>
    <button onClick={()=>setCount(count=>count+1)}>Click me</button>
    <p>Previous value : {prev}</p>
  </>

}

export default App
