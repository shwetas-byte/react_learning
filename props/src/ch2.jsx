import Ch3 from "./ch3"


function Ch2(props)
{
    return(
        <>
            <h1>Child2</h1>
            <Ch3 user2={props.user1}/>

        </>
    )
}
export default Ch2