import { useState } from "react"

function Home()
{
   let[demo,setDemo]= useState('shweta')
   let[sum,setSum]=useState(0)
   function fun()
   {
     setDemo('working')
   }
   function inc()
   {
    setSum(sum+1)
   }
   function dec()
   {
    if(sum>0)
    {
    setSum(sum-1)
        
    }
    else{
        alert("Not less than zero..")
    }
   }
   function reset()
   {
    setSum(sum=0)
   }
    return(
        <>
            <h1>This is home page-{demo}</h1>
            <button onClick={fun}>click here</button>
            <h1>{sum}</h1>
            <button onClick={inc}>+  </button>
            <button onClick={dec}>-  </button>
            <button onClick={reset}>Reset</button>


        </>
    )
}
export default Home