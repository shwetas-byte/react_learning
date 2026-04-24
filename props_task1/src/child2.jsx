import Child3 from "./child3"


function Child2({name1,city1})
{
    return(
        <>
            <h1>This is child2 page</h1>
            <Child3 name2={name1} city2={city1}/>
        </>
    )
}
export default Child2