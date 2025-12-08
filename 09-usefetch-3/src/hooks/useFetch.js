import { useEffect, useState } from "react";

export function useFetch(url){
    const [finalData , setFinalData] = useState({});

    const [loading, setLoading] = useState(true);


    async function getDetails(){
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json);
        setLoading(false);

    }


    useEffect(()=>{

        getDetails();
    },[url]) ;      //whenever url changes, re renders useFetch


    useEffect(()=>{
        setInterval(getDetails , 10000);

    },[]) //start a clock, that calls getDetails every 10 seconds => REAL TIME UPDATES
    //for eg, if backend changed somewhere else, without refreshing also we can see the changes in real-time

    return {
        finalData, loading
    }

}