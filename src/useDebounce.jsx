import { useEffect, useState } from "react";

const useDebounce=(input,time)=>{
    const[data,setData]= useState('');
    useEffect(()=>{
            const timeval = setTimeout(()=>{
                setData(input);
            },time*1000)
            // console.log(times);
            // if(times===0) setData(input);

            return ()=>{
                clearInterval(timeval);
            }
    },[input,time])

   return data;
}  
export { useDebounce };

