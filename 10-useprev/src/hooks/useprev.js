import { useEffect, useRef } from "react";

export function usePrev(value) {
  const ref = useRef();
  console.log("rerender happened with" , value)

  useEffect(() => {
    console.log("updated the value to be ", value)
    ref.current = value;
  }, [value]);

  // eslint-disable-next-line react-hooks/refs
  console.log("returned ", ref.current)
  // eslint-disable-next-line react-hooks/refs
  return ref.current; //returns the prev value
}//it returrns first , effect gets called later 
//so it gives the previous value
