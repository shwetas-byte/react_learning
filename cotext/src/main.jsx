import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createContext } from "react";


export let dataob=createContext()
let person={name:'shweta',age:19,city:"bhopal"}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <dataob.Provider  value={person}>
      <App />
    </dataob.Provider>
  </StrictMode>,
)
