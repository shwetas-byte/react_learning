function Child1(props)
{
  let{name}=props
  let{course}=props

    return(
        <>
            <h1>Welcome {name} of {props.age} residing in {props.city} pursunig {course}</h1>   
        </>
    )
}
export default Child1