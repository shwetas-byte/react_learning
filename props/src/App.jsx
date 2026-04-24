import { Child1 } from "./child"
import Child2 from "./child2"
import Child4 from "./child4"

function App()
{
  let person={
    name:'shweta',contact:123545
  }
  return(
    <>
     <h1>This is App page</h1>
     <Child1 name='shweta' age={18} city='Bhopal' />
     <Child2 name='shweta' contact='112324'/>
     <Child4 {...person} />
    </>
  )
}
export default App