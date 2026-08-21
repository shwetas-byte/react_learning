import { Route, Routes } from "react-router-dom"
import Api from "./pages/fakeapi"
import Insert from "./pages/insert"
import Show from "./pages/show"



export default function App(){
  return(
    <>
     <Routes>
        <Route index element={<Insert/>}/>
        <Route path="/show" element={<Show/>}/>
     </Routes>
       </>
  )
}