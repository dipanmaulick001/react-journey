import { useRef } from 'react'

function useDebounce(originalFn){    //custom hook
  const currentClock = useRef();

  const fn = () =>{
    clearTimeout(currentClock.current); //old clock stopped
      currentClock.current = setTimeout(originalFn,200) //clock started
  }
  return fn;
}


function App(){
  function sendDataToBackend(){
    fetch("api.amazon.com/search")
  }

  const debouncedFn = useDebounce(sendDataToBackend);

  return<>
    <input type='text' onChange={debouncedFn}/> 
  </>
} //debouncedFn called everytime we type

export default App


//as we type on the input box, debouncedFn is called 
//in debouncedFn -> clock started ,after sometime actual backend function is called
//but if within that ime, we type again -> debouncedFn called again, the old clock is cleared
//the last remaining clock calls the backend function and sends request (last clock remains clock only when we stop typing)
