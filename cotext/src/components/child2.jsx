import { useContext } from "react"
import { dataob } from "../main"


export default function Child2(){
    let person=useContext(dataob)
    return(
        <>
            <h1>Child2 Page {person.name} {person.age}</h1>

            {/* ye old dated hai becasuse isme jyada object bnte h toh nested function bnanan pdta h jis se difficulty and readability less ho jati hai uske jgh useContext hook use krte hai */}
            {/* <dataob.Consumer>
                {
                    (data)=><h1>comes from app {data}</h1>
                }
            </dataob.Consumer> */}
        </>
    )
}