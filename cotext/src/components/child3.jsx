import { useContext } from "react"
import { dataob } from "../main"


export default function Child3(){
    let {name,city}=useContext(dataob)
    return(
        <h1>This is Child 3 page {name} {city}</h1>
    )
}