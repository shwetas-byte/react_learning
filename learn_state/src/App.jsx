import { useState } from "react";
function App(){
  let[data,setData]=useState("Coding")
  let[arr,arra_]=useState([1,2,3,4,5])
  function fun(){
    setData("Think")
  }
  function fun1(n){
    setData(n)
  }
  return(
    <>
      <h1>{data}</h1>
      <h1>{arr.map((item,index)=>(<h2 key={index}>{item}</h2>))}</h1>
      <button onClick={fun}>Change Data</button>
      <button onClick={()=>fun1("Shweta")}>Change</button>
      <button onClick={()=>setData("Pihu")}> Direct change</button>
    </>
  )
}
export default App