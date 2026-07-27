import { useState } from "react";

export function Task(){
   let[count,setCount]= useState(0)
   function fun1()
   {
    if (count>0){
        setCount(count-=1)
    }
   }
   return(
    <>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+=1)}>+</button>
        {/* <button onClick={()=>setCount( count-=1)}>-</button> */}
        <button onClick={fun1}>-</button>
    </>
   )
}