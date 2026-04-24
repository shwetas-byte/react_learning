import Child2 from "./child2"


function Child1({name,city})
{
    return(

        <>
            <h1>This is child1 page</h1>
            <Child2 name1={name} city1={city} />
        </>
    )
}
export default Child1