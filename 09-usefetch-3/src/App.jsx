import { useState } from 'react';

import { useFetch } from './hooks/useFetch'

function App() {
  const [currentPost, setCurrentPost] = useState(1);
  const {finalData , loading} = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost); //url changes when button pressed

  if(loading){
    return<div>
       Loading...
    </div>
  }

  return (
    //eg: button 2 pressed -> url changes :".../posts/2" -> useFetch rendered again as url changes -> only post no2 displayed
  <div>
    <button onClick={()=>setCurrentPost(1)}>1</button>
    <button onClick={()=> setCurrentPost(2)}>2</button>    
    <button onClick={()=> setCurrentPost(3)}>3</button>
    {JSON.stringify(finalData)}
  </div>
)

}

export default App