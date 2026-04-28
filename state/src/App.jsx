import { useState } from "react"
import Home from "./home"
import Contact from "./contact"
import Image from "./image"


function App()
{
  // let [variable,function]=useState(initial atate/value) syntax

  // let[data,setData]=useState(10.56)
  let[data,setData]=useState({name:"shweta"})
  let[color,setColor]=useState()
  function red()
  {
    setColor('red')
  }
  function blue()
  {
    setColor('blue')
  }
  


  return(
    <>
      <div style={{backgroundColor:color}}>
           <h1>Lorem ipsum dolor sit amet. {data.name}</h1>
           
      <Home/>
      <Contact/>

      <button onClick={red}>Red</button>
           <button onClick={blue}>Blue</button>

          <button onClick={()=>setColor('black')}>Black</button>



          </div>
        <Image/>
      
    </>
  )
}
export default App