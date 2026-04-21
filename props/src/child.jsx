export function Child1(props)   //yha props object bn gya hai
{
    let {city}=props  //destructuring of object
    return(
        <>
            <h1>This is Child1 page {props.name} {props.age} {city}</h1>
        </>
    )
}