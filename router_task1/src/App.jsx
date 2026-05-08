import { Route, Routes } from "react-router-dom"
import Home from "./home"
import Contact from "./contact"
import About from "./about"
import Service from "./service"
import Help from "./help"
import Navbar from "./navbar"
import Structure from "./structure"

function App()
{
  return(
    <>
        {/* <Navbar/> */}
        <Routes >
          <Route path='/' element={<Structure/>}>
              <Route index element={<Home/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/service" element={<Service/>}/>
              <Route path="/help" element={<Help/>}/>

          </Route>
          
          
       
        </Routes>
    </>
  )
}
export default App