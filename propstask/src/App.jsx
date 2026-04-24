import Child1 from "./child1"

function App()
{
  return(
    <>
      <h1>This is Parent page</h1>
      <Child1 name='Shweta' age={18} city='bhopal' course='fsd'/>
    </>
  )
}
export default App