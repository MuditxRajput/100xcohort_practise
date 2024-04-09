import { useEffect, useState } from "react";

const useTimer=()=>{
    const [time,setTime] = useState(0);
    useEffect(()=>{
                const time = setInterval(()=>{
                    setTime((pre)=>pre+1);
                },1000)

                return()=>{
                    clearInterval(time)
                }

    },[time])


    return time;

}
export { useTimer };
