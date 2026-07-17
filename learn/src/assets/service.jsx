import { Gallery } from "./gallery"

export const Service=({name,number})=>{
    // let {name,number}=props
    return(
        <>
            <h1>Service page {name} {number}</h1>
            <Gallery username={name} number={number}/>





















        </>
    )
}