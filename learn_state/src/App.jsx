import { useState } from "react";
import { Task } from './task.jsx'
import { Map } from "./map.jsx";

function App(){
  let[data,setData]=useState("Coding")
  let[arr,arra_]=useState([1,2,3,4,5])
  let[color,setColor]=useState()

  function fun(){
    setData("Think")
  }
  function fun1(n){
    setData(n)
  }
  return(
    <>
    <h1 style={{backgroundColor:color}}>Lorem ipsum dolor sit amet.</h1>
    <button onClick={()=>setColor('red')}>Red</button>
    <button onClick={()=>setColor('blue')}>Blue</button>
    <hr />
      <h1>{data}</h1>
      {/* <h1>{arr.map((item,index)=>(<h2 key={index}>{item}</h2>))}</h1> */}
      <button onClick={fun}>Change Data</button>
      <button onClick={()=>fun1("Shweta")}>Change</button>
      <button onClick={()=>setData("Pihu")}> Direct change</button>
      <hr /><hr />
      <Task/>
      <Map/>
    </>
    
  )
}
export default App