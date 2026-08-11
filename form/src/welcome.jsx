export function Welcome(){
    let data=JSON.parse(localStorage.getItem("userdata"))
    return(
        <>
            <h1>Welcome {data.name}</h1>
        </>
    )

}