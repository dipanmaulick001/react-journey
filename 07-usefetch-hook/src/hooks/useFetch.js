import { useState, useEffect } from "react"


export function useFetch(url){
    const [finalData , setFinalData] = useState({})


    async function getDetails(){
            const response = await fetch(url);
            const json = await response.json();
            setFinalData(json);
        }

    

    


    useEffect(()=>{
        
        
    
        //backend logic- we wanna fetch backend data when component mounts
        getDetails();

    },[]);


    return {
        finalData
    }
}