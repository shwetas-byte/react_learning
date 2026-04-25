import { useState } from "react"

function App()
{
  // let [variable,function]=useState(initial atate/value) syntax

  // let[data,setData]=useState(10.56)
  let[data,setData]=useState({name:"shweta"})

  return(
    <>
      <h1>Lorem ipsum dolor sit amet. {data.name}</h1>
    </>
  )
}
export default App