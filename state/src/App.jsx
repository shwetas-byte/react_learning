import { useState } from "react"
import Home from "./home"

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
           <button onClick={red}>Red</button>
           <button onClick={blur}>Blue</button>
          {/* <button onClick={color2}>Green</button> */}
          {/* <button onClick={color3}>Black</button> */}


      </div>
      
      <Home/>
    </>
  )
}
export default App