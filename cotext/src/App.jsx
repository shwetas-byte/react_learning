import { createContext } from "react";
import Child1 from "./assets/components/child1";

export let dataob=createContext()
let name='Shweta'
export default function App(){
  return(
    <>
      <dataob.Provider  value={name}>
        <Child1 />
      </dataob.Provider>
    </>
  )
}