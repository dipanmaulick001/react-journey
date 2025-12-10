import {useEffect, useState } from "react"

export const useDebounce = (value , delay)=>{
    const [debouncedVal , setDebouncedVal] = useState(value);

    useEffect(()=>{
        const handler = setTimeout(()=>{
                setDebouncedVal(value);  //wait for sometime then use the value
        },delay) //the last remaining clock uses/changes the value and sends the backend req later on

        return ()=>{
            clearTimeout(handler);
        } //stop the clock if the user starts typing again 

    },[value, delay])



    return debouncedVal;
}

//debounce -> wait till typing ends to send api requests (basic idea behind debouncing)
//start a clock with wait time , and restart it everytime the user types again, stop the clock when user does not type .