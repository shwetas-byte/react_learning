import { Route, Routes } from "react-router-dom"
import Home from "./home"


function App()
{
    return
    (
      <>
      <h1>kdlafjn</h1>
         <Routes>
             <Route path="/home" element={<Home/>}/>
         </Routes>
      </>
    )
}
export default App