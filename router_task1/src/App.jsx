import { Route, Routes } from "react-router-dom"
import Home from "./home"
import Contact from "./contact"
import About from "./about"
import Service from "./service"
import Help from "./help"




function App()
{
  return(
    <>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/help" element={<Help/>}/>
       
        </Routes>
    </>
  )
}
export default App