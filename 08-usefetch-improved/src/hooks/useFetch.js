import { useEffect, useState } from "react";

export function useFetch(url){
    const [finalData , setFinalData] = useState({});


    async function getDetails(){
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json);

    }


    useEffect(()=>{

        getDetails();
    },[url]) ;      //whenever url changes, re renders useFetch

    return {
        finalData
    }

}