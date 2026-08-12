import { dataob } from "../../App"

export default function Child2(){
    return(
        <>
            <h1>Child2 Page</h1>
            <dataob.Consumer>
                {
                    (data)=><h1>comes from app {data}</h1>
                }
            </dataob.Consumer>
        </>
    )
}