import { Route, Routes } from "react-router-dom"
import Form from "./form"
import Form1 from "./form1"
import Form_task from "./form_task"

const App=()=>{
  return(
    <>
    <Routes>
      <Route index element={<Form1/>}/>
      <Route path="/form" element={<Form/>}/>
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