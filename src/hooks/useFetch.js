import { useEffect, useState } from "react";
import { fetchApi } from "./fetch";



export const useFetch =(endPoint)=>{
    const [data,setData]=useState([]);
    const [isLoading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    useEffect (()=>{
        const fetchData = async()=>{
            try{ 
                setLoading(true);
                const res = await fetchApi.get(endPoint);
            
                setData(res.data);

            }catch(error){
                setError(error)
                setLoading(false)
                console.log("________________________________________")
                console.log(error)
            }
            setLoading(false)
            
        }
        fetchData()
    },[endPoint])
  
    return{data ,isLoading,error};
}