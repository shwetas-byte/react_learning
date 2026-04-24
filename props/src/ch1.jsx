import Ch2 from "./ch2"


function Ch1(props)
{
    return(
        <>
            <h1>Child1</h1>
            <Ch2 user1={props.user}/>
        </>
    )
}
export default Ch1