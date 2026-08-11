import { Route, Routes } from "react-router-dom"
import Form from "./form"
import Form1 from "./form1"
import Form_task from "./form_task"
import { Form_Local } from "./from_local"
import { Form1_local } from "./form1_local"
import { Welcome } from "./welcome"

const App=()=>{
  return(
    <>
    <Routes>
      {/* <Route index element={<Form1/>}/>
      <Route path="/form" element={<Form/>}/> */}

      <Route index element={<Form_Local/>}/>
      <Route path='/form1_local' element={<Form1_local/>}/>
      <Route path='/welcome' element={<Welcome/>}/>
    </Routes>
      {/* <Form/>
      <hr />
      <Form1/>

      
      <hr />
      <Form_task/> */}

    </>
  )
}
export default App