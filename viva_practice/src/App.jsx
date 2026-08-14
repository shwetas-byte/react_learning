import { Route, Routes } from "react-router-dom";
import Child from "./child";
import Child1 from "./child1";


export default function App(){
  return(
    <Routes>
      <Route index element={<Child/>}/>
      {/* <Route path="/child" element={<Child/>}/> */}
      <Route path="/child1" element={<Child1/>}/>
   </Routes>
  )
}